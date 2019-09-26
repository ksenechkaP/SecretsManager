import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.scss']
})
export class SecretsComponent implements OnInit {
  newSecretForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newSecretForm = this.formBuilder.group({
           secret_name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
           secret_text: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(280)]],
           allowExport: [false],
       });
  }

  // convenience getter for easy access to form fields
  get f() { return this.newSecretForm.controls; }

   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.newSecretForm.invalid) {
        return;
    }
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.newSecretForm.value));

    }

}
