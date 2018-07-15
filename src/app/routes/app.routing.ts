import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from '../components/landing-page-components/sections/sections.component';
import { LoginComponent } from '../components/login/login/login.component';
import { RoundzComponent } from '../components/roundz/roundz.component';
import { RequestComponent } from '../components/request/request.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: SectionsComponent,
    },
    {
        path: 'roundz',
        component: RoundzComponent,
        data: { title: 'Roundz' }
    },
    {
        path: 'request',
        component: RequestComponent,
        data: { title: 'Request' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
