import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(  
              private router: Router) { }

  ngOnInit() {
  }

  newSubmit($event) {
    console.log("User signup " + $event)
    this.router.navigate(['/new_dog/oeoeoeoeoe']);
  }
}
