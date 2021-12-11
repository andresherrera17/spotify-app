import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class UserModule { }
