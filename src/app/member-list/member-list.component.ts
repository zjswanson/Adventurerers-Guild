import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [DataService]
})
export class MemberListComponent implements OnInit {
  adventurers: FirebaseListObservable<any[]>;

  constructor(private firebase: DataService) { }

  ngOnInit() {
    this.adventurers = this.firebase.getAdventurers();
  }

}
