import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit { 

  constructor(private _services:NewsapiService){}

    headingDisplay:any = [];
    
    ngOnInit(): void {

      this._services.Heading().subscribe((result) =>{
        this.headingDisplay = result.articles;
      })
    }
  }
