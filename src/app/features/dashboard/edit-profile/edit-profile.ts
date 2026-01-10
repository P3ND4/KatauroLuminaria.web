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
      image: ['']

    });
    loginS.currentUser$.subscribe({
      next: val => {
        this.currentUser = val ?? undefined;
        this.editProfileForm.get('name')?.setValue(val?.name)
      }
    })
  }

  async ngOnInit(): Promise<void> {
    this.loginS.currentUser$.subscribe({
      next: user => {
        this.currentUser = user ?? undefined;
        this.editProfileForm.patchValue({
          name: user?.name ?? '',
          lastName: user?.lastName ?? '',
          phone: user?.phone ?? '',
          email: user?.email ?? '',
          image: user?.image ?? ''
        });
        this.imagePreview = user?.image
      }
    });
  }
  ngAfterViewInit() { }


  upload(file: File) {
    this.progress = 0;
    this.cloudy.uploadFile(file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress && event.total) {
        this.progress = Math.round((event.loaded / event.total) * 100);
        this.cdr.detectChanges();
      } else if (event.type === HttpEventType.Response) {
        console.log('✅ Subida completa:', event.body);
        const optimizedUrl = (event.body as { secure_url: string }).secure_url.replace('/upload/', '/upload/q_auto,f_auto/');
        this.progress = 100;
        this.imagePreview = optimizedUrl
        this.editProfileForm.get('image')?.setValue(optimizedUrl);
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
        lastName: this.editProfileForm.get('name')?.value,
        phone: this.editProfileForm.value.phone,
        password: this.editProfileForm.get('password')?.value,
        email: this.editProfileForm.get('email')?.value,
        image: this.editProfileForm.get('image')?.value,
      }

      this.http.updateUser(user, true ? "24f4dac8-89b3-4f44-a507-c0f1c781f616" : this.currentUser!.id).subscribe(
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

    this.close.emit(true);
  }
}
