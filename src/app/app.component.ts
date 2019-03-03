import { Component, OnInit } from '@angular/core';
import  *as  firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe'

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBkLy-bh6YWNBIEebFj63PvNuzWVWY3fN0",
    authDomain: "my-first-angular-project-10.firebaseapp.com",
    })

  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
  
}
