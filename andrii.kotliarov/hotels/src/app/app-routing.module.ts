import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HotelsComponent,
    children: [
      {
        
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
