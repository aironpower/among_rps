import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { MatchesListComponent } from '../components/matches-list/matches-list.component';


@NgModule({
  declarations: [
    GameComponent, MatchesListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
