import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BookPage } from '../book/book';
import { Bible, BooksProvider } from '../../providers/books/books';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  bibles:Bible[];
  isNightMode: boolean;
  constructor(
    public navCtrl: NavController, 
    public bookProvider: BooksProvider
  ) {}

  ngOnInit(){
    this.bibles = this.bookProvider.bibles
  }

  openBible(bible){
    this.navCtrl.setRoot("BibleVersionPage")
    this.bookProvider.setVersionItem(bible);
  }
}
