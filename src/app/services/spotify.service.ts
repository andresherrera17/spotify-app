import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCQFhSq9h1V0MjtHd4jffT8cwVmh6tXLB2Dfl1B7vuXlEqytzTc3qcik2GzOF1m83B_pmS4LehHLynfI04'
    })

    return this.http.post(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data['albums'].items));
  }
}
