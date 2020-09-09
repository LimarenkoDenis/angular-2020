import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from '@app/services/auth.service';
import { flatMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUserData } from '@app/models/IUserData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public registered: boolean = false;

  public constructor(private dialog: MatDialog, private authService: AuthService) { }

  public ngOnInit(): void {
  }

  public openRegisterForm(): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(RegisterFormComponent);
    dialogRef.afterClosed()
    .pipe(
      map((data: IUserData) => {
        if (!data) {
          return of(false);
        }
        return this.authService.register(data);
      })
      )
    .pipe(flatMap((data: Observable<boolean>) => data))
    .subscribe((isRegistered: boolean) => {
      this.registered = isRegistered;
    });
  }

  public cancelRegistration(): void {
    this.registered = false;
  }
}
