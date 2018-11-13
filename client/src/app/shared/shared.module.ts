import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponentComponent],
  exports: [UserComponentComponent]
})
export class SharedModule { }
