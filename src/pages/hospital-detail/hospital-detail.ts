import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-hospital-detail',
  templateUrl: 'hospital-detail.html',
})
export class HospitalDetailPage {

  hospital: any = {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public phone: CallNumber) {
    this.hospital = navParams.get('hospital');
  }

  call() {
    this.phone
      .callNumber('023213123213', true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }


}
