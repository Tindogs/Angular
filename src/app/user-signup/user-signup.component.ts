import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(  
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  newSubmit($event) {
    console.log("User signup " + $event)
    this.router.navigate(['/new_dog/oeoeoeoeoe']);
  }
}
