import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../../shared/services/cloudinary/cloudinary.service';
import { HttpEventType } from '@angular/common/http';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { Observable } from 'rxjs';
import { parseError } from '../../../shared/services/errors/errorParser';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule, BoxLoader],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfile {
  loading = false;
  editProfileForm: FormGroup;
  currentUser: User | undefined;
  imagePreview: string | undefined;
  protected progress = 0;
  @Output() close = new EventEmitter<boolean>(false);
  isHovering = false
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder, private http: HttpService, private loginS: AuthService,
    private cloudy: CloudinaryService, private cdr: ChangeDetectorRef, private errorServ: ErrorLogService) {
    this.editProfileForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      image: [null]

    });
    loginS.currentUser$.subscribe({
      next: val => {
        this.currentUser = val ?? undefined;
        this.editProfileForm.get('name')?.setValue(val?.name)
      }
    })
  }
  openDropdown = false;
  selectedRegionCode = 2;
  async ngOnInit(): Promise<void> {
    this.loginS.currentUser$.subscribe({
      next: user => {

        const phone = user?.phone.split(" ") ?? ""
        this.selectedRegionCode = user ? this.regionCodes.findIndex(x => x.code == phone[0]) : 2
        this.selectedRegionCode = this.selectedRegionCode == -1 ? 2 : this.selectedRegionCode

        this.currentUser = user ?? undefined;
        this.editProfileForm.patchValue({
          name: user?.name ?? '',
          lastName: user?.lastName ?? '',
          phone: phone.length > 0 ? phone[1] : "",
          email: user?.email ?? '',
          image: { image: user?.image, public_id: user?.publicId }
        });
        this.imagePreview = user?.image
        this.cdr.detectChanges()
      }
    });
  }
  ngAfterViewInit() { }
  onSelectRegionCode(index: number) {
    this.selectedRegionCode = index;
    this.openDropdown = false;
  }
  allowedTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/svg'];
  upload(file: File) {
    this.progress = 0;
    if (file.size > 5 * 1024 * 1024) {
      this.errorServ.addError({ name: "Archivo demasiado grande", error: "El acrhivo seleccionado excede el maximo permitido de 5MB" });
      return;
    }
    if (!this.allowedTypes.includes(file.type)) {
      this.errorServ.addError({ name: 'Formato no permitidp', error: `El formato: ${file.type} no esta permitido, solo PNG, SVG o JPG` })
      return;
    }

    this.cloudy.uploadFile(file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress && event.total) {
        this.progress = Math.round((event.loaded / event.total) * 100);
        this.cdr.detectChanges();
      } else if (event.type === HttpEventType.Response) {
        console.log('✅ Subida completa:', event.body);
        let res = event.body as { secure_url: string, public_id: string }
        const optimizedUrl = res.secure_url.replace('/upload/', '/upload/q_auto,f_auto/');
        this.progress = 100;
        this.imagePreview = optimizedUrl
        this.editProfileForm.get('image')?.setValue({ image: optimizedUrl, publicId: res.public_id });
        setTimeout(() => {
          this.progress = 0;
          this.cdr.detectChanges();
        }, 3000);
        this.cdr.detectChanges();
      }
    });
  }
  onDragOver(event: DragEvent, option?: number) {
    event.preventDefault();
    this.isHovering = true;
  }
  onDragLeave(event: DragEvent) {
    this.isHovering = false;
  }

  isValidForm(name: string) {
    return this.editProfileForm.get(name)?.valid || !this.editProfileForm.get(name)?.touched;
  }
  async onDrop(event: DragEvent, option?: number) {
    event.preventDefault();
    this.isHovering = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0]

      this.upload(file);

      event.dataTransfer.clearData();
    }
  }
  onFilesSelected(event: Event) {
    this.fileInput.nativeElement.click();
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.upload(file);
    }
  }
  onSubmit() {
    if (this.editProfileForm.valid) {
      this.loading = true
      const user: CreateUserDto = {
        name: this.editProfileForm.get('name')?.value,
        lastName: this.editProfileForm.get('lastName')?.value,
        phone: this.regionCodes[this.selectedRegionCode].code + " " + this.editProfileForm.value.phone,
        password: this.editProfileForm.get('password')?.value,
        email: this.editProfileForm.get('email')?.value,
        image: this.editProfileForm.get('image')?.value?.image,
        publicId: this.editProfileForm.get('image')?.value?.publicId,

      }

      this.http.updateUser(user, this.currentUser!.id).subscribe(
        {
          next: (value) => {
            console.log(value);
            this.loading = false;
            this.close.emit(true);
          },
          error: (err) => {
            this.loading = false;
            console.log(err);
            this.errorServ.addError(parseError(err));
          }
        }
      )
    } else {
      // Mark all fields as touched to show validation errors
      this.editProfileForm.markAllAsTouched();
    }
  }
  onClose() {

    this.close.emit(false);
  }


  regionCodes = [
    { code: '+1', country: 'US' },   // Estados Unidos
    { code: '+52', country: 'MX' },
    { code: '+53', country: 'CU' },
    { code: '+54', country: 'AR' },
    { code: '+55', country: 'BR' },
    { code: '+56', country: 'CL' },
    { code: '+57', country: 'CO' },
    { code: '+58', country: 'VE' },

    { code: '+34', country: 'ES' },
    { code: '+33', country: 'FR' },
    { code: '+39', country: 'IT' },
    { code: '+49', country: 'DE' },
    { code: '+44', country: 'GB' },

    { code: '+351', country: 'PT' },
    { code: '+31', country: 'NL' },
    { code: '+32', country: 'BE' },
    { code: '+41', country: 'CH' },
    { code: '+43', country: 'AT' },

    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+82', country: 'KR' },
    { code: '+91', country: 'IN' },

    { code: '+7', country: 'RU' },
    { code: '+20', country: 'EG' },
    { code: '+27', country: 'ZA' },
    { code: '+61', country: 'AU' },
  ];
}
