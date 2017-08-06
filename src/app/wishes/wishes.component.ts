import { Component, OnInit, OnDestroy, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
styleUrls: ['./wishes.component.css'],
providers: [AngularFireAuth, AngularFireDatabase]
})
export class WishesComponent implements OnInit, OnDestroy, AfterViewInit {
  uid: string;
   recordkey: string;
  private sub: any;
    post: FirebaseObjectObservable<any>;
    user: Observable<firebase.User>;
    shareUrl: string;
    WAshareUrl: string;
    sanitizedUrl: any;
    db: AngularFireDatabase;
    isCreator: Boolean;
    afAuth: AngularFireAuth;
    host: 'https://friendship-day-3bd5b.firebaseapp.com';
  constructor(public route: ActivatedRoute, s: DomSanitizer, public router: Router, afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.db = db;
    this.isCreator = false;
    this.afAuth = afAuth;
     this.user = afAuth.authState;
     const host = 'https://friendship-day-3bd5b.firebaseapp.com';
     this.shareUrl =  host + router.url;
     this.sanitizedUrl = s.bypassSecurityTrustUrl(`whatsapp://send?text=My wishes for you ${this.shareUrl}`);
    }
 ngAfterViewInit() {
 }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       const uid = params['uid'];
       const recordkey = params['key'];
           if (uid === null || recordkey === null ) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.uid = uid.trim();
      this.recordkey = recordkey.trim();
      this.post = this.db.object(`/users/${this.uid}/${this.recordkey}`);
       // In a real app: dispatch action to load the details here.
        this.afAuth.auth.onAuthStateChanged(user => {
          if (user) {
            if (this.uid === user.uid) {
              this.isCreator = true;
            } else {
              this.isCreator = false;
            }
      }
    });
    });
}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
