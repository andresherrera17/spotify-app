import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class UserModule { }
