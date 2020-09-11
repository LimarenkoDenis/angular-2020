import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '@app/models/IProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  public profile: IProfile;

  @Input()
  public description: string;

  public ngOnInit(): void {
  }
}
