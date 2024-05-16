import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router,private sessionStorage:SessionStorageService){

  }
  onLogOut(){
    if(confirm("Do you want to log out?")){
      this.sessionStorage.clear();
      this.router.navigateByUrl("/");
    }
  }
}
