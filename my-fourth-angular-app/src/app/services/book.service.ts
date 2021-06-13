import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http, Headers} from '@angular/http';
import { Book } from '../data/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  public BOOK_SERVICE_BASE_URL = 'http://localhost:8080/api/v1/books';

  constructor(private http: Http) { }

  getAllBooks(): Observable<any>{
    return this.http.get(this.BOOK_SERVICE_BASE_URL + '/all');
  }

  addBook(book: Book): any{
    return this.http.post(`${this.BOOK_SERVICE_BASE_URL}/addbook`, book);
  }

  addtofavorite(book: Book): any{
    return this.http.put(`${this.BOOK_SERVICE_BASE_URL}/addtofavorite`, book);
  }

  removefromfavorite(book: Book): any{
    return this.http.put(`${this.BOOK_SERVICE_BASE_URL}/removefromfavorite`, book);
  }


}

