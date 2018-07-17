import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBannerComponent } from './components/landing-page-components/main-banner/main-banner.component';
import { SectionsComponent } from './components/landing-page-components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login/login.component';
import { RoundzComponent } from './components/roundz/roundz.component';
import { RequestComponent } from './components/request/request.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WhateverappComponent } from './components/sections/whateverapp/whateverapp.component';
import { WebappComponent } from './components/webapp/webapp.component';
import { NativeappComponent } from './components/nativeapp/nativeapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBannerComponent,
    SectionsComponent,
    FooterComponent,
    LoginComponent,
    RoundzComponent,
    RequestComponent,
    PageNotFoundComponent,
    WhateverappComponent,
    WebappComponent,
    NativeappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
