import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-pools',
  templateUrl: 'pools.component.html',
  styleUrls: ['pools.component.css'],
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
export class PoolsComponent implements OnInit {

  title = 'Pools';
  model = {};
  pools: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.pools = af.database.list('/pools');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.pools.push(this.model);
    this.model = {};
  }

  deleteItem(key: string) {
    this.pools.remove(key); 
  }

}
