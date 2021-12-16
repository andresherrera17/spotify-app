import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nuevasCanciones: any[] = [];
  error: boolean;
  mensajeError: string = "";

  constructor(private _serviceSpotify: SpotifyService) {
    this.error = false;
  }

  ngOnInit(): void {
    this.getReleases();
  }

  getReleases() {
    this._serviceSpotify.getNewReleases().subscribe(
      {
        next: (data) => {
          this.nuevasCanciones = data;
        },
        error: ({ error }) => {
          this.error = true;
          this.mensajeError = error?.error?.message;
        }
      }
    )
  }



}
