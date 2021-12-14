import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/shared/navbar/navbar.module';
import { UserModule } from '../user/user.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { ArtistaComponent } from './artista/artista.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { MainComponent } from './main/main.component';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ArtistaComponent,
    BuscarComponent,
    TarjetasComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NavbarModule,
    UserModule,
  ],
  providers: [AuthService, SpotifyService]
})
export class HomeModule { }
