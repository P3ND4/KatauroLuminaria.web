import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http/http.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../../shared/services/cloudinary/cloudinary.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfile {
  editProfileForm: FormGroup;
  currentUser: User | undefined;
  imagePreview: string | undefined;
  protected progress = 0;
  @Output() close = new EventEmitter<boolean>(false);
  isHovering = false
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder, private http: HttpService, private loginS: AuthService, private cloudy: CloudinaryService, private cdr: ChangeDetectorRef) {
    this.editProfileForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: [''],
      image: ['']

    });
    loginS.currentUser$.subscribe({
      next: val => {
        this.currentUser = val ?? undefined;
        this.editProfileForm.get('name')?.setValue(val?.name)
      }
    })
  }
  ngOnInit() {
    this.loginS.currentUser$.subscribe({
      next: user => {
        this.currentUser = user ?? undefined;
        this.editProfileForm.patchValue({
          name: user?.name ?? '',
          lastName: user?.lastName ?? '',
          phone: user?.phone,
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

      const user: CreateUserDto = {
        name: this.editProfileForm.get('name')?.value,
        lastName: this.editProfileForm.get('name')?.value,
        phone: this.editProfileForm.value.phone,
        password: this.editProfileForm.get('password')?.value,
        email: this.editProfileForm.get('email')?.value,
        image: this.editProfileForm.get('image')?.value,
      }

      this.http.updateUser(user, this.currentUser!.id).subscribe(
        {
          next: (value) => {
            console.log(value);
            this.close.emit(true);

          },
          error(err) {
            console.log(err)
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
