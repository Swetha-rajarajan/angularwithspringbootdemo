import { Component, OnInit } from '@angular/core';
import { Book } from './data/book';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isloggedin: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.isloggedin = false;
    localStorage.setItem('userloggedin', '');

  }

  searchBooks(searchForm: any): void {

  }

  dashboard(): void {
    const user: string = localStorage.getItem('userloggedin');
    if (user !== ''){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }


  }
  favorites(): void {
    const user: string = localStorage.getItem('userloggedin');
    if (user !== ''){
      this.router.navigate(['/favorites']);
    }else{
      this.router.navigate(['/login']);
    }



  }
  logout(): void {
    localStorage.setItem('userloggedin', '');
    this.router.navigate(['/login']);
  }


}
