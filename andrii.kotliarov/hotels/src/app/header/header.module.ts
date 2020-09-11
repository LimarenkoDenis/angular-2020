import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    RegisterFormComponent
  ]
})
export class HeaderModule { }
