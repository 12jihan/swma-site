import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from '../components/landing-page-components/sections/sections.component';
import { LoginComponent } from '../components/login/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SectionsComponent,
    },
    {
        path: 'home',
        component: SectionsComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
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
