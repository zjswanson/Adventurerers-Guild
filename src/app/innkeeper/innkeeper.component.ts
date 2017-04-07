import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Adventurer } from  './../adventurer-model';

@Component({
  selector: 'app-innkeeper',
  templateUrl: './innkeeper.component.html',
  styleUrls: ['./innkeeper.component.css'],
  providers: [DataService]
})
export class InnkeeperComponent implements OnInit {
  adventurers: FirebaseListObservable<any[]>;
  currentAdventurer: any;
  isAdding: boolean;
  isEditing: boolean;
  sortBy: string = 'all';


  constructor(private firebase: DataService) { }

  ngOnInit() {
    this.adventurers = this.firebase.getAdventurers();
    this.selectAdd();
  }

  sortList(value:string) {
    this.sortBy = value;
  }

  // new, empty adventurer in addform, null editform
  selectAdd(){
    this.isAdding = true;
    this.isEditing = false;
    let newHero = new Adventurer('Name', 'Title', 'Url of Adventurer\'s Image','warrior' ,0, 0);
    this.currentAdventurer = newHero;
  }

  // put an adventurer in the edit form, null add form
  selectEdit(adventurer: Adventurer) {
    this.isAdding = false;
    this.isEditing = true;
    this.firebase.getAdventurerByKey(adventurer.$key).subscribe( data=> { this.currentAdventurer = data});
  }
  // save new adventurer
  addAdventurer(){
    this.firebase.saveAdventurer(this.currentAdventurer);
  }
  // save changes to adventurer
  saveEdit() {

  }

  delete() {
    if(confirm("Are you sure you want to remove this adventurer from the guild?")){
      this.firebase.deleteAdventurer(this.currentAdventurer);
      this.selectAdd();
    }
  }
}
