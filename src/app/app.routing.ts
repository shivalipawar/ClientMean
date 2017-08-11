import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { MyStatusComponent } from './tab/my-status/my-status.component';
import { DailyStatusComponent } from './tab/daily-status/daily-status.component';
import { ArchiveComponent } from './tab/archive/archive.component';
import { DetailsComponent } from './tab/details/details.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] ,
    children: [
        { path: 'myStatus',  component: MyStatusComponent },
        { path: 'details', component :DetailsComponent },
        { path: 'dailyStatus',  component: DailyStatusComponent},
        { path: 'archives', component: ArchiveComponent ,
    children : [
        { path: ':d',  component: DailyStatusComponent},
    ]}
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent, },
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
