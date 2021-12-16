import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private _serviceSpotify: SpotifyService
  ) {
    this.loading = false;
    this.router.params.subscribe(param => {
      this.getArtista(param['id']);
      this.getTopTracks(param['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loading = true;
    this._serviceSpotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      })
  }

  getTopTracks(id: string) {
    this.loading = true;
    this._serviceSpotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
        this.loading = false;
      })
  }

}
