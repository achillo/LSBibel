import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BooksProvider, Bible } from '../providers/books/books';
import { SettingsService } from '../providers/settings.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  selectedTheme: String;
  rootPage:any = "HomePage";
  bibles: Bible[];
  @ViewChild(Nav) nav: Nav;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public bookProvider: BooksProvider,
    public settings: SettingsService,
    splashScreen: SplashScreen
  ) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    this.bibles = this.bookProvider.bibles
  }

  openBible(bible){
    this.nav.setRoot("BibleVersionPage")
    this.bookProvider.setVersionItem(bible);
  }
}
