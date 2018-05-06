import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bible, BooksProvider, Book } from '../../providers/books/books';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  bible: Bible;
  books: any[] = [];
  alliance:string;
  isNightMode: boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public booksProvider: BooksProvider
  ) {
    this.bible = this.booksProvider.getVersionItem()
    this.alliance = this.navParams.get("alliance")
    console.log("book->",this.bible)
    console.log("alliance->",this.alliance)
  }

  ionViewCanEnter() {
    //this.getAllBooks(this.bible.filename);
  }

  ngAfterViewInit(){
    this.getAllBooks(this.bible.filename);
  }

  getAllBooks(filename){
    this.booksProvider.getBookVersion(filename)
      .subscribe((data:any)=>{
        let BIBLEBOOK:Array<Book> = data.XMLBIBLE.BIBLEBOOK;
        let booksData = BIBLEBOOK.map((val, i)=>{
          val.bname = this.booksProvider.all_books[i]
          return val
        });

        if(this.alliance == "old_a"){this.books = booksData.slice(0, 39)}
        if(this.alliance == "new_a"){this.books = booksData.slice(39, 66)}
        console.log(this.books)
      })
  }

  openBook(book){
    this.booksProvider.bchapter = book.CHAPTER;
    this.navCtrl.push("BookPage", {book: book})
  }
}
