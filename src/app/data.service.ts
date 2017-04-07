import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DataService {
  adventurers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.adventurers = this.angularFire.database.list('adventurers');
  }

  getAdventurers() {
    return this.adventurers;
  }

  getAdventurerByKey(key: any) {
    let result = this.angularFire.database.object('/adventurers/' + key);
    return result;
  }




}
