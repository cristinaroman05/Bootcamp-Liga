export interface MatchResponse {
  localTeam: MatchResponse[];
  awayTeam: MatchResponse[];
  goalsLocalTeam: number;
  goalsAwayTeam: number;
  score: string;
  round: number;
  matchDate: string;
}
