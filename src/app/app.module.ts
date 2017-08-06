import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';
import { FormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'wishes/:uid/:key', component: WishesComponent },
  { path: 'wishes',
  redirectTo: '/home',
    pathMatch: 'full' },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
const fireConfig = {
    apiKey: 'AIzaSyBfQlwQ05XM8Vkx4Ko8aBkLwDZKCO3xwOk',
    authDomain: 'friendship-day-3bd5b.firebaseapp.com',
    databaseURL: 'https://friendship-day-3bd5b.firebaseio.com',
    projectId: 'friendship-day-3bd5b',
    storageBucket: '',
    messagingSenderId: '640267058908'
  };
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    WishesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireConfig),
    BrowserAnimationsModule,
      RouterModule.forRoot(
      appRoutes,
  //    { enableTracing: true } // <-- debugging purposes only
    ),
  MyMaterialModule,
  FormsModule,
  ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
