import { IUserData } from '@app/models/IUserData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '@app/shared/directives/must-match.directive';
import { ValidDate } from '@app/shared/directives/valid-date.directive';
import { MatDialogRef } from '@angular/material/dialog';
import { Gender } from '@app/models/Gender';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public isPasswordHidden: boolean = true;
  public registrationData: IUserData = {
    id: null,
    name: null,
    surname: null,
    email: null,
    password: null,
    birthDate: null,
    gender: Gender.female
  };
  public formGroup: FormGroup;

  public constructor(private dialog: MatDialogRef<any>) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
    name: new FormControl(this.registrationData.name, [Validators.required, Validators.minLength(4)]),
    surname:  new FormControl(this.registrationData.surname, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(this.registrationData.email, [Validators.required, Validators.email]),
    password: new FormControl(this.registrationData.password, [Validators.required, Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9_-]+$')]),
    confirmPassword: new FormControl(this.registrationData.password,
      [Validators.required]),
    birthDate: new FormControl(this.registrationData.birthDate, [Validators.required, ValidDate]),
    gender: new FormControl(this.registrationData.gender, [Validators.required])
    }, {
      validators: MustMatch('confirmPassword', 'password')
    });
  }

  public register(): void {
    this.registrationData.name = this.formGroup.controls.name.value;
    this.registrationData.surname = this.formGroup.controls.surname.value;
    this.registrationData.email = this.formGroup.controls.email.value;
    this.registrationData.password = this.formGroup.controls.password.value;
    this.registrationData.birthDate = this.formGroup.controls.birthDate.value;
    this.registrationData.gender = Gender[this.formGroup.controls.gender.value];
    this.dialog.close(this.registrationData);
  }
}
