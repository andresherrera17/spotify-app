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
  loading: boolean;

  constructor(private _serviceSpotify: SpotifyService) {
    this.error = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.getReleases();
  }

  getReleases() {
    this.loading = true;
    this.error = false;
    this._serviceSpotify.getNewReleases().subscribe(
      {
        next: (data) => {
          this.nuevasCanciones = data;
          console.log(data);
          this.loading = false;
        },
        error: ({ error }) => {
          this.error = true;
          this.mensajeError = error?.error?.message;
          this.loading = false;
        }
      }
    )
  }



}
