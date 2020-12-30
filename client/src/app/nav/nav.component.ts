import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any ={};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl("/members");
    }, error=>{
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
    this.model = {};
    this.router.navigateByUrl("/");
  }

}
