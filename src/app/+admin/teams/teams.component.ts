import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css'],
  providers: [
    MdIconRegistry
  ],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ],
})
export class TeamsComponent implements OnInit {

  title = 'Teams';
  model = {};
  teams: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.teams = af.database.list('/teams');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.teams.push(this.model);
    this.model = {};
  }

  delete(key: string) {
    this.teams.remove(key); 
  }

  test() {
    console.log('test');
  }

}
