import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AngularFireAuth, AngularFireDatabase]
})
export class HomeComponent implements OnInit {
name: string;
quotation = `Friends show their love in times of trouble, not in happiness.`;
userDb: FirebaseListObservable<any>;
 user: Observable<firebase.User>;
  constructor(private router: Router, public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
     this.user = afAuth.authState;
      this.afAuth.auth.signInAnonymously().then((user) => {
        this.userDb = db.list('/users/' + user.uid);
      });
   }

  ngOnInit() {
  }
  createWish() {
    if (this.name && this.name.length >= 3 && this.name.length <= 30) {
      const sub = this.user.subscribe(user => {
        if (!user) {return; }
          this.userDb.push({name : this.name, quotation: this.quotation}).then((item) => {
        this.router.navigateByUrl(`/wishes/${user.uid}/${item.key}`);
      });
      sub.unsubscribe();
      });
    } else  { return; }
  }
}
