export class MatchData {
  constructor(
    public creator:  string,
    public name:     string,
    public mode:     string,
    public maxPlayers:  number,
    public open:     boolean,
    public active:   boolean
  ){}
}