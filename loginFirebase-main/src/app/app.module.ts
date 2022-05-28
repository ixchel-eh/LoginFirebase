import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';

const firebaseConfig = {
  apiKey: "AIzaSyAGbkjzpfUhqE9_xHPQ9Ef31RAEFQHeH5c",
  authDomain: "fir-1-34dea.firebaseapp.com",
  projectId: "fir-1-34dea",
  storageBucket: "fir-1-34dea.appspot.com",
  messagingSenderId: "165423153854",
  appId: "1:165423153854:web:98fc1ccb1887a8e2e494ef",
  measurementId: "G-BD3YVVG63L"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
