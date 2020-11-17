import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadoComponent } from './components/dado/dado.component';
import { DadoHijoComponent } from './components/dado-hijo/dado-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    DadoHijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
