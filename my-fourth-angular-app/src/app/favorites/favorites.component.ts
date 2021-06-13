import { Component, OnInit } from '@angular/core';
import { Book } from '../data/book';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  books: Book[] = [];
  book: Book;

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.books = [];
    this.getAllBooks();
  }

  getAllBooks(): any{
    this.bookservice.getAllBooks().subscribe(
      (data) => {
        this.books = [];
        this.books = data.json();
      }
    );
  }

  removefromfavorite(book: Book): any{

    this.bookservice.removefromfavorite(book).subscribe(
      (data) => {
       // this.getAllBooks();
        this.books = this.getAllBooks().filter((existingbook) => existingbook.isfavorite === true);

      });
  }


 searchBooks(searchForm: any): any {
    console.log(searchForm.search);
    if (searchForm.search === ''){
      this.getAllBooks();
    }else{
      this.books = this.books.filter((existingbook) => existingbook.name === searchForm.search);
    }

  }
}