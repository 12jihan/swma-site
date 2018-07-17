import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from '../components/landing-page-components/sections/sections.component';
import { LoginComponent } from '../components/login/login/login.component';
import { RoundzComponent } from '../components/roundz/roundz.component';
import { RequestComponent } from '../components/request/request.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { WebappComponent } from '../components/webapp/webapp.component';
import { NativeappComponent } from '../components/nativeapp/nativeapp.component';

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
        path: 'webapp',
        component: WebappComponent,
        data: { title: 'Web App' }
    },
    {
        path: 'nativeapp',
        component: NativeappComponent,
        data: { title: 'Native App' }
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
