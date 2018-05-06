import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bible, BooksProvider } from '../../providers/books/books';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  book: any;
  books: any = [];
  isNightMode: boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public booksProvider: BooksProvider
  ) {
    this.book = this.navParams.get("book")
    console.log("book->", this.book)
  }

  ionViewDidLoad() {
    //this.getAllBooks(this.book.filename);
  }

  openChapter(chapter){
    chapter.bname = this.book.bname;
    this.navCtrl.push("ChapterPage", {chapter: chapter})
  }
}
