import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';


@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {
  constructor(private api:TcnewsapiService){ }

  allImages:any = [];
  ngOnInit(): void {
      this.api.tcheadline().subscribe(result=>{
        console.log(result);
        this.allImages=result;
      })
  }

}
