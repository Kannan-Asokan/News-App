import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) {}

    newsApiUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=20b269ac4efc44f29a0185e9fc67ffcf";

    techApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=20b269ac4efc44f29a0185e9fc67ffcf";
    businessApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20b269ac4efc44f29a0185e9fc67ffcf";

    Heading():Observable<any>
    {
      return this._http.get(this.newsApiUrl);
    }
    Technews():Observable<any>
    {
      return this._http.get(this.techApiUrl);
    }
    Businessnews():Observable<any>
    {
      return this._http.get(this.businessApiUrl);
    }

  }
