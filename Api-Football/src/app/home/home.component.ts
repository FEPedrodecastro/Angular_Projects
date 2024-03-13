import { Component } from '@angular/core';
import { FootballService } from '../football-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teamId: number=33;
  teamInfo: any | null = null;
  players: any[] | null = null;

  constructor(private footballService: FootballService) {}

  searchTeam() {
    this.footballService.getTeamInfoById(this.teamId).subscribe((data: any) => {
      this.teamInfo = data.response[0].team;
      this.players = data.response[0].players;
    });
  }
}
