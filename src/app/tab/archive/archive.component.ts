import { Observable, Subscriber } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { StatusService } from 'app/service/status.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
allStatus:  Observable<any>;
showDates: boolean;
  constructor(private statusService: StatusService) {
    this.showDates = true;
  }

  ngOnInit() {
    this.allStatus = this.statusService.getAllStatus();
  }
}
