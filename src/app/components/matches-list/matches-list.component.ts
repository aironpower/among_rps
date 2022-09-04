import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  @Input() matches:any;

  constructor() { }

  ngOnInit(): void {
  }

}
