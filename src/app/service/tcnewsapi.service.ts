import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //api url 
  apiurl = 'https://picsum.photos/v2/list'

  tcheadline():Observable<any>{
    return this._http.get(this.apiurl);
  }
}
