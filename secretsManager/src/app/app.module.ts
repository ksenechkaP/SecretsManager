import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretComponent } from './components/secret/secret.component';
import { SecretsComponent } from './components/secrets/secrets.component';
import { SecretsService } from './services/secrets.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecretComponent,
    SecretsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SecretsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
