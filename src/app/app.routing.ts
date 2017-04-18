import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
// tslint:disable-next-line:eofline
export const routing = RouterModule.forChild(appRoutes);