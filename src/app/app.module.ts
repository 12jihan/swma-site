import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBannerComponent } from './components/landing-page-components/main-banner/main-banner.component';
import { SectionsComponent } from './components/landing-page-components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBannerComponent,
    SectionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
