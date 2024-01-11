import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //api url 
  apiurl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4caf0e183f0b44fa92b52afd5d633608'

  tcheadline():Observable<any>{
    return this._http.get(this.apiurl);
  }
}
