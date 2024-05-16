import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { SessionStorageService } from 'ngx-webstorage';
import { LoginRequest } from 'src/app/models/login-request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  obj :any;
  showSideMenu=false;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-05-15' },
      { title: 'event 2', date: '2024-05-16' }
    ],
    
  };
  constructor(private sessionStorage:SessionStorageService,private route:Router){}
  
  ngOnInit(): void
  {
    this.obj=this.sessionStorage.retrieve("emp");
    if(this.obj){
      console.log(this.obj);
    }
    else{
      alert("your Session expired please login again");
      this.route.navigateByUrl("/");
    }
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
