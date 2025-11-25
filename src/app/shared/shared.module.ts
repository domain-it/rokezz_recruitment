import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Button } from './components/controls/button/button';
import { TextInputComponent } from './components/controls/text-input/text-input.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Button,
    TextInputComponent,
  ],
  exports: [
    Button,
    ReactiveFormsModule,
    TextInputComponent,
  ],
})
export class SharedModule {}
