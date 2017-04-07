import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Adventurer } from  './../adventurer-model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DataService]
})
export class DetailComponent implements OnInit {
  adventurerKey: any;
  adventurer: FirebaseObjectObservable<any>;
  object: any;

  constructor(private firebase: DataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.adventurerKey = urlParameters['key'];
    });
    this.adventurer = this.firebase.getAdventurerByKey(this.adventurerKey);
  }
}
