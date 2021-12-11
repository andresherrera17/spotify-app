import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [AuthService]
})
export class UserModule { }
