import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { MyStatusComponent } from './tab/my-status/my-status.component';
import { DailyStatusComponent } from './tab/daily-status/daily-status.component';
import { ArchiveComponent } from './tab/archive/archive.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] ,
    children: [
        { path: 'myStatus',  component: MyStatusComponent },
        { path: 'dailyStatus',  component: DailyStatusComponent},
        { path: 'archives', component: ArchiveComponent ,
    children : [
        { path: ':d',  component: DailyStatusComponent},
    ]}
    ]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
