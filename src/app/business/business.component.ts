import { Component } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  constructor(private service:NewsapiService){}
  businessDisplay:any = [];
  ngOnInit():void {

    this.service.Businessnews().subscribe((result) =>{
    this.businessDisplay = result.articles;
    })

  }

}
