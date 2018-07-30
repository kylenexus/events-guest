import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { IGuest } from './guest';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iEvents Guest';
  showForm: boolean = true;
  showQr: boolean = false;
  private guest: IGuest;
  private urlQr: string;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(){ }

  close(){
    this.sidenav.close();
  }

  generateQR(form: NgForm){
    this.showForm = false;
    this.showQr = true;
    this.urlQr = '';
    this.guest = new IGuest();

    this.guest.companyid = form.value.companyid;
    this.guest.firstname = form.value.firstname;
    this.guest.middlename = form.value.middlename;
    this.guest.lastname = form.value.lastname;
    this.guest.phone = form.value.phone;
    this.guest.email = form.value.email;

    this.urlQr = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + JSON.stringify(this.guest);

    console.log(JSON.stringify(this.guest));
  }

  resetQR(){
    this.showForm = true;
    this.showQr = false;
    this.guest = null;

    console.log(this.urlQr);
    console.log('reset');
  }

}
