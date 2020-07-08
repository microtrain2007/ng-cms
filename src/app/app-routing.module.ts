import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 2. Import the UserComponent
import { UsersComponent }   from './users/users.component';
import { UserViewComponent }   from './user-view/user-view.component';

// 3. Declare your routes
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
