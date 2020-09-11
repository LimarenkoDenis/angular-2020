import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from '@app/services/auth.service';
import { map } from 'rxjs/operators';
import { IUserData } from '@app/models/IUserData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public constructor(private dialog: MatDialog, private authService: AuthService) { }

  public ngOnInit(): void {
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public logIn(): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(RegisterFormComponent);
    dialogRef.afterClosed()
    .pipe(
      map((data: IUserData) => {
        if (data) {
          this.authService.logIn(data);
        }

        return !!data;
      })
      )
    .subscribe((isDataProvided: boolean) => {
      console.log('log in attempt was made - ', isDataProvided);
    });
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
