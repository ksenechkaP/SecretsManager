import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Secret } from '../models/secret.model';

@Injectable()

export class SecretsService {
  secretsUrl = 'http://localhost:3000/secrets';
  defaultUrl = 'http://localhost:4200/';

  constructor( private httpClient: HttpClient) {

  }

  getSecrets() {
     return this.httpClient.get(this.secretsUrl);
  }

  getSecretById(secretId: string): Observable<Secret> {
    return this.httpClient.get<Secret>(this.secretsUrl + '/' + secretId);
  }

  createNewSecret(secret: Secret) {
    return this.httpClient.post<Secret>(this.secretsUrl, secret).subscribe(
        val => {
            console.log('POST call successful value returned in body',
                        val);
            alert('New secret was created');
            window.location.href = this.defaultUrl;
        },
        response => {
            console.log(secret);
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        }
    );
  }

  updateSecret(secret: Secret) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    return this.httpClient.put<Secret>(this.secretsUrl + '/' + secret.id, secret, httpOptions).subscribe(
        val => {
            console.log('PUT call successful value returned in body',
                        val);
            alert('The secret was updated');
        },
        response => {
            console.log('PUT call in error', response);
        },
        () => {
            console.log('The PUT observable is now completed.');
        }
    );
    }

  deleteSecret(id) {
    return this.httpClient.delete<void>(this.secretsUrl + '/' + id).subscribe(
        val => {
            console.log('DELETE call successful value returned in body',
                        val);
            alert('This secret was deleted');
            window.location.href = this.defaultUrl;
        },
        response => {
            console.log('DELETE call in error', response);
        },
        () => {
            console.log('The DELETE observable is now completed.');
        }
    );
  }
}
