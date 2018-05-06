import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bible, BooksProvider } from '../../providers/books/books';

/**
 * Generated class for the BibleVersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bible-version',
  templateUrl: 'bible-version.html',
})
export class BibleVersionPage {
  old_a:string = "Ancienne alliance";
  old_a_books: string = "39 Livres";
  new_a:string = "Nouvelle alliance";
  new_a_books:string = "27 Livres";
  bversion: Bible;
  isNightMode: boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public bookProvider: BooksProvider
  ) {
    this.bversion = this.bookProvider.getVersionItem()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibleVersionPage');
  }

  showBooks(a){
    this.navCtrl.push("BooksPage", {alliance: a})
  }
}
