import { Component, inject } from '@angular/core'; // Import inject
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules and classes
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule // Add ReactiveFormsModule for form handling
    // HttpClientModule is usually provided in app.config.ts via provideHttpClient()
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Inject FormBuilder and HttpClient
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  // Define the FormGroup
  contactForm: FormGroup;

  // Submission status
  isSubmitting = false;
  submitMessage: string | null = null;
  submitError: string | null = null;

  constructor() {
    // Initialize the form in the constructor
    // Removed phone control
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    // Mark all fields as touched to trigger validation messages
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = null;
      this.submitError = null;

      // IMPORTANT: Replace with your actual Formspree endpoint URL!
      const formspreeEndpoint = 'https://formspree.io/f/xqapwola'; // <-- GET THIS FROM FORMSPREE.IO

      // Prepare form data for Formspree (it expects simple key-value pairs)
      const formData = this.contactForm.value;

      // Send the data using HttpClient
      this.http.post(formspreeEndpoint, formData, { headers: { 'Accept': 'application/json' } })
        .subscribe({
          next: (response) => {
            console.log('Form submitted successfully', response);
            this.submitMessage = 'Thank you for your message! I will get back to you soon.';
            this.contactForm.reset(); // Reset form on success
            this.isSubmitting = false;

            // Add setTimeout to clear the success message after 3 seconds
            setTimeout(() => {
              this.submitMessage = null;
            }, 3000); // 3000 milliseconds = 3 seconds

          },
          error: (error) => {
            console.error('Error submitting form', error);
            this.submitError = 'Sorry, there was an error sending your message. Please try again later or contact me directly via email/LinkedIn.';
            this.isSubmitting = false;

            // Add setTimeout to clear the submission error message after 3 seconds
            setTimeout(() => {
              this.submitError = null;
            }, 3000); // 3000 milliseconds = 3 seconds
          }
        });
    } else {
      console.log('Form is invalid');
      this.submitError = 'Please fill out all required fields correctly.';
       // Optional: Clear error message after a delay as well
       setTimeout(() => {
          this.submitError = null;
       }, 3000); // Clear validation error after 3 seconds
    }
  }

  // Helper getters for easier access to form controls in the template (optional)
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  // Removed phone getter
  get message() { return this.contactForm.get('message'); }
}
