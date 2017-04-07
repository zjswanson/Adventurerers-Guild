import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Adventurer } from './adventurer-model';

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

  saveAdventurer(adventurer: Adventurer) {
    this.adventurers.push(adventurer);
  }

  updateAdventurer(adventurer: Adventurer) {
    let adventurerInDB = this.getAdventurerByKey(adventurer.$key);
    adventurerInDB.update({
                            name: adventurer.name,
                            title: adventurer.title,
                            imageUrl: adventurer.imageUrl,
                            specialty: adventurer.specialty,
                            goblinsSlain: adventurer.goblinsSlain,
                            dragonsSlain: adventurer.dragonsSlain
                          });
  }

  deleteAdventurer(adventurer: Adventurer) {
    let adventurerInDB = this.getAdventurerByKey(adventurer.$key);
    adventurerInDB.remove();
  }




}
