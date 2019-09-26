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

@NgModule({
  declarations: [
    AppComponent,
    SecretComponent,
    SecretsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SecretsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
