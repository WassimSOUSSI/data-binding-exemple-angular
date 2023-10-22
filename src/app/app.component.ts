import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  book!:Book;
  inputText:String='Initial value';
  names!:Array<string>;

  ngOnInit(): void {
     this.book=new Book('Book','Author',375,'email.ws@email.com');
     this.names=new Array();
  }

  public add_Item(name:string):void{
    this.names.push(name);
  }
}
