import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordInputComponent } from './word-input/word-input.component';
import { ChangeLetterPipe } from 'src/shared/pipes/word-change.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WordInputComponent,
    ChangeLetterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ChangeLetterPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
