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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptores/auth.interceptor';
import { LoadingModule } from 'src/app/components/shared/loading/loading.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from 'src/app/services/chat.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ArtistaComponent,
    BuscarComponent,
    TarjetasComponent,
    MainComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NavbarModule,
    UserModule,
    LoadingModule,
    PipesModule,
    FormsModule
  ],
  providers: [AuthService, SpotifyService, ChatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
