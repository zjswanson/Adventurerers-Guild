import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  adventurers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.adventurers = this.angularFire.database.list('adventurers');
  }

  getAdventurers() {
    return this.adventurers;
  }


}
