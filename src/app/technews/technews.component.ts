import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:NewsapiService){}
  techDisplay:any = [];
  ngOnInit():void {

    this.service.Technews().subscribe((result) =>{
    this.techDisplay = result.articles;
    })

  }

}
