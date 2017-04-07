import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { InnkeeperComponent } from './innkeeper/innkeeper.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { DragonSlayerPipe } from './dragon-slayer.pipe';
import { SpecialtyPipe } from './specialty.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    InnkeeperComponent,
    AboutComponent,
    DetailComponent,
    DragonSlayerPipe,
    SpecialtyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
