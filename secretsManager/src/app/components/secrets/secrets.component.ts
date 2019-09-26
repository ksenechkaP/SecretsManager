import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SecretsService } from '../../services/secrets.service';
import { Secret } from '../../models/secret.model';
import * as uuid from 'uuid';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.scss']
})
export class SecretsComponent implements OnInit {
  private newSecretForm: FormGroup;
  public submitted = false;
  public secretsList;
  closeResult: string;
  searchText;

  constructor( private formBuilder: FormBuilder, private secretsService: SecretsService, private modalService: NgbModal) { }

  listSecrets() {
    this.secretsService.getSecrets().subscribe(res => {
      this.secretsList = res;
    });
  }

  ngOnInit() {
    this.listSecrets();
    this.newSecretForm = this.formBuilder.group({
           secretName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
           secretText: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(280)]],
           allowExport: [false],
       });
  }

  // convenience getter for easy access to form fields
  get f() { return this.newSecretForm.controls; }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.newSecretForm.invalid) {
        return;
    }

    const {secretName, secretText, allowExport} = this.newSecretForm.value;
    const id = uuid.v4();
    // const id = Math.floor(Math.random() * Math.floor(100));
    const secret = new Secret(id.toString(), secretName, secretText, allowExport);
    this.secretsService.createNewSecret(secret);
    }

}
