import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../data/book';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public status = true;

  books: Book[] = [];
  book: Book = new Book();


  constructor(private bookservice: BookService) {
   }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): any {
    this.bookservice.getAllBooks().subscribe(
      (data) => {
        this.books = data.json();
      }
    );
  }



  searchBooks(searchForm: any): any {
    console.log(searchForm.search);
    if (searchForm.search === ''){
      this.getAllBooks();
    }else{
      this.books = this.books.filter((existingbook) => existingbook.name === searchForm.search);
    }




  }

  addBook(bookForm: any): void {

    console.log(bookForm.id);
    this.book.id = bookForm.id;
    this.book.name = bookForm.name;
    this.book.author = bookForm.author;
    this.bookservice.addBook(this.book).subscribe(
      data => {
        this.getAllBooks();
      }
    )
  }

  addtofavorite(book: Book): any {
    this.bookservice.addtofavorite(book).subscribe(
      (data) => {
        this.getAllBooks();
      }
    );
  }


}