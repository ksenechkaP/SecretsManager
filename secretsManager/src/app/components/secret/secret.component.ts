import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

import { SecretsService } from '../../services/secrets.service';
import { Secret } from '../../models/secret.model';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {
  public editForm: FormGroup;
  public secret: Secret = {
    id: null,
    secretName: null,
    secretText: null,
    allowExport: null
  };

  constructor(private secretsService: SecretsService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
           secretName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
           secretText: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(280)]],
           allowExport: [false],
       });
    this.secret.id = this.route.snapshot.paramMap.get('id');
    if (this.secret.id) {
      this.secretsService.getSecretById(this.secret.id).subscribe(res => {
       this.secret = res;
       this.editForm.get('secretName').setValue(this.secret.secretName);
       this.editForm.get('secretText').setValue(this.secret.secretText);
     });
    }
  }
  onSubmit() {
    const {secretName, secretText} = this.editForm.value;
    if (this.secret.id) {
      const secret = new Secret(this.secret.id, secretName, secretText, false);
      console.log(secret);
      this.secretsService.updateSecret(secret);
    }
  }
  deleteSecret() {
    this.secretsService.deleteSecret(this.secret.id);
  }
}
