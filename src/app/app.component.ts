import { Component, ViewChild } from '@angular/core';
import { Guest } from './model/guest.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iEvents Guest';

  model = new Guest('','','','','','');
  showForm: boolean = true;
  showQr: boolean = false;
  urlQr: string;

  constructor(){ }

  // close(){
  //   this.sidenav.close();
  // }

  submitForm(form: NgForm){
    this.showForm = false;
    this.showQr = true;
    this.urlQr = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + JSON.stringify(this.model);

    console.log(JSON.stringify(this.model));
  }

  reset(){
    this.showForm = true;
    this.showQr = false;

    this.model = new Guest('','','','','','');

    console.log('reset');
  }

}
