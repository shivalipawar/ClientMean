import { Component, OnInit } from '@angular/core';
import { Status } from '../../model/Status';
import { StatusService } from 'app/service/status.service';
@Component({
  selector: 'app-my-status',
  templateUrl: './my-status.component.html',
  styleUrls: ['./my-status.component.sass']
})
export class MyStatusComponent implements OnInit {
updates: any = [];
counter = 0;
onLeave = false;
date = new Date();
StatusMessage = '';
user = JSON.parse(JSON.stringify(localStorage.getItem('currentUser')));
  constructor(private statusService: StatusService) {
     this.statusService.getByDateUser(Date.now(), 'E0398451').subscribe((data) => {
        this.updates = data.Status;
    });
  };
  ngOnInit() {
    this.StatusMessage = '';
  }

  removeChoice(id: number) {
    this.StatusMessage = '';
    const index: number = this.updates.findIndex(r => r.id === id);
    if (index !== -1) {
        this.updates.splice(index, 1);
    }
  }

  addChoice() {
    this.StatusMessage = '';
    this.updates.push(
      new Status(this.counter++ , '', null, '')
    );
  }

  udpateStatus() {
    this.StatusMessage = '';
    const userData = {
      StatusDate: this.date.getMonth() + 1  + '/' + this.date.getDate() +  '/' + this.date.getFullYear(),
      PersonalDetails: [{
        Name: this.user.Name,
        EmpId: this.user.EmpId,
        EmailId: this.user.EmailId,
        Status: this.updates,
        Onleave: false
      }]
    };
  this.statusService.updateStatusByUser(userData).subscribe((res) => {
    this.StatusMessage = res._body ? 'Status updated successfully' : 'error while updating status';
  });
  }
}
