import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookCatogries:BookCategory[];
  constructor(private _bookService:BookService) { }

  ngOnInit() {
    this.listBookCatgories();
  }

   listBookCatgories()
   {
       this._bookService.getBooksByCategoies().subscribe(
         data =>this.bookCatogries=data
       );
   }
}
