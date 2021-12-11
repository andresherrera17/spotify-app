import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/shared/navbar/navbar.module';
import { UserModule } from '../user/user.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    UserModule,
  ],
  providers: [AuthService]
})
export class HomeModule { }
