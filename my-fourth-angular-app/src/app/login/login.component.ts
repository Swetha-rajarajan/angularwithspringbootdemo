import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../data/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean;
  user: User = new User();

  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
    this.isloggedin = true;

   }

  isloggedin: boolean;

  ngOnInit(): void {
  }

  routetosignup(): void{
    this.router.navigate(['/signup']);
  }

  login(loginForm: any): void {

    this.user.username = loginForm.username;
    this.user.password = loginForm.password;
    this.userservice.login(this.user).subscribe(
      data => {

        if (data.status === 201){
          this.isloggedin = true;
          localStorage.setItem('userloggedin', this.user.username);
          this.router.navigate(['/dashboard']);
        }else{
          localStorage.setItem('userloggedin','');
          this.router.navigate(['/login']);
        }
        }
    );
  }

}
