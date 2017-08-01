import { Observable, Subscriber } from 'rxjs/Rx';
import { Component, OnInit , QueryList, OnDestroy } from '@angular/core';
import { StatusService } from 'app/service/status.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.sass']
})
export class DailyStatusComponent implements OnInit, OnDestroy  {
  dailyStatus:  Observable<any>;
   date: string;
   sub: any;
constructor(private statusService: StatusService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.date = params['d'];
             this.dailyStatus = this.statusService.getByDate(this.date === undefined ? Date.now() :
             new Date(this.date.replace(/\-/g, '/')).getTime());
    });
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
