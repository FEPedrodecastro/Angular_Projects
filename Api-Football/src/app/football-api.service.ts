import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'https://api-football-v1.p.rapidapi.com/v3';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'a1c7d144bfmsh3d77e8dae31e8f8p126b30jsn98fa4abb89d8',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getTeamInfoById(teamId: number) {
    return this.http.get(`${this.apiUrl}/players/squads?team=${teamId}`, { headers: this.headers });
  }
}
