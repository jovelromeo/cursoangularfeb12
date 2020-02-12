import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
