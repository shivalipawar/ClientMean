import { Observable, Subscriber } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusService } from 'app/service/status.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',

  
  styleUrls: ['./archive.component.sass']
})
export class ArchiveComponent implements OnInit {
allStatus:  Observable<any>;
showDates: boolean;
customDate: string;
  constructor(private statusService: StatusService, private router: Router) {
    this.showDates = true;
  }

  ngOnInit() {
    this.allStatus = this.statusService.getAllStatus();
  }

  // SearchCustomDate() {
  //   console.log(this.customDate);
  //   this.router.navigate(['/archives/' + new Date(this.customDate.replace(/\-/g, '/')).getTime()]);
  // }
}
