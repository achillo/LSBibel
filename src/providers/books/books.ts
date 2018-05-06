import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Bible{
  filename: string;
  name: string;
  year: string
}
export interface Book{
  CHAPTER: Array<object>;
  bname: string;
  bnumber: string
}
export interface Chapter{
  VERS: Array<object>;
  bname: string;
  cnumber: string
}

@Injectable()
export class BooksProvider {
  bversion: Bible;
  all_books: Array<string>;
  new_a: Array<string>;
  bchapter:Array<Chapter>;
  bibles:Bible[];
  constructor(public http: HttpClient) {
    this.all_books = [
      "Genèse", "Exode", "Lévitique", "Nombres", "Deutéronome",
      "Josué", "Juges", "Ruth", "1 Samuel", "2 Samuel", "1 Rois", "2 Rois",
      "1 Chroniques", "2 Chroniques", "Esdras", "Néhémie", "Esther", "Job",
      "Psaumes", "Proverbes", "Ecclésiaste", "Cantique des cantiques",
      "Esaïe", "Jérémie", "Lamentations de Jérémie", "Ezéchiel", "Daniel", 
      "Osée", "Joël", "Amos", "Abdias", "Jonas", "Michée", "Nahum",
      "Habakuk", "Sophonie", "Aggée", "Zacharie", "Malachie",
      "Matthieu", "Marc", "Luc", "Jean", "Actes", "Romains", "Galates",
      "Ephésiens", "Philippiens", "Colossiens", "1 Thessaloniciens", 
      "2 Thessaloniciens", "1 Corinthiens", "2 Corinthiens", "1 Timothée", 
      "2 Timothée", "Tite", "Philémon", "Hébreux", "Jacques", "1 Pierre",
      "2 Pierre", "1 Jean", "2 Jean", "3 Jean", "Jude", "Apocalype"
    ]

    this.bibles = [
      {filename: "bible_french_darby", name: "Darby", year: "1890"},
      {filename: "bible_french_ls", name: "Louis Segond", year: "1910"},
      {filename: "bible_french_martin", name: "Martin", year: "1744"},
      {filename: "bible_french_ost", name: "Osterwald", year: "1996"}
    ]
    console.log('Hello BooksProvider->...', this.all_books.length);
  }

  getBookVersion(url){
    return this.http.get(`assets/json/${url}.json`)
  }

  getVersionItem(){
    return this.bversion
  }

  setVersionItem(version){
    this.bversion = version
  }

  getOldAlliancebooks(){

  }

  getNewAlliancebooks(){
    
  }
}
