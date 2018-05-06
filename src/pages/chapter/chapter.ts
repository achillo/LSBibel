import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter, BooksProvider } from '../../providers/books/books';
import { SettingsService } from '../../providers/settings.service';

/**
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html',
})
export class ChapterPage {
  chapter: Chapter;
  bchapters: Chapter[];
  currentPage: number;
  bname: string;
  totalPages: number;
  selectedTheme: String;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public bookService: BooksProvider,
    private zone: NgZone,
    private settings: SettingsService
  ) {
    this.chapter = this.navParams.get("chapter");
    this.bname = this.chapter.bname;
    this.currentPage = parseInt(this.chapter.cnumber);
    this.bchapters = this.bookService.bchapter
    this.totalPages = this.bchapters.length;

    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    //this.setPage(1);
    console.log("bchapters",this.bookService.bchapter)
    console.log("chapter->", this.chapter)
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }
  
  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
        return;
    }

    this.zone.run(()=>{
      this.chapter = this.bchapters[page -1]
      this.currentPage = page;
      console.log("current-page->", this.currentPage)
      console.log("current-chapter->", this.chapter)
    })
  }
}
