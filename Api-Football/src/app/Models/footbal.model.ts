export interface FootballApiResponse {
  response: TeamResponse[];
}

export interface TeamResponse {
  team: Team;
  players: Player[];
}

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
