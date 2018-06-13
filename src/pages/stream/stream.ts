import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  //name: 'post-details',
  segment: 'stream',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {

  videoUrl: string = "https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
    console.log(this.videoUrl);
  }

}
