import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Adventurer } from  './../adventurer-model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [DataService]
})
export class MemberListComponent implements OnInit {
  adventurers: FirebaseListObservable<any[]>;
  sortBy: string = 'all';

  constructor(private firebase: DataService, private router: Router) { }

  ngOnInit() {
    this.adventurers = this.firebase.getAdventurers();
  }

  navigate(adventurer: Adventurer) {
    this.router.navigate(['detail', adventurer.$key]);
  }

  sortList(value:string) {
    this.sortBy = value;
  }

}
