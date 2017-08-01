import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/User';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
currentUser: User;
tabs: any;
    users: User[] = [];
  constructor( private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.tabs = [{
        active: true,
        link: '/myStatus',
        title: 'My Status'
    },
    {
        active: false,
        link: '/dailyStatus',
        title: 'Daily Status'
    },
    {
        active: false,
        link: '/archives',
        title: 'Archives'
    },
    {
        active :false,
        link: '/details',
        title: 'StandUp Details'
    }
    ];
    this.router.navigate(['/myStatus']);
   }
   selectTab(tab: any) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  ngOnInit() {
  }
}
