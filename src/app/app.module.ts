import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TechnewsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
