import { Component, OnInit } from '@angular/core';
import { ApisService } from './../../../../services/apis.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  teamdata : any;
  total: any=0;
  constructor(private myService : ApisService) { }

  ngOnInit() {
    this.myService.getTeams().subscribe(res =>{ 
      this.teamdata = res.data; 
      // console.log(this.teamdata.amount); 
      for(let i=0;i<this.teamdata.length;i++){ 
      this.total += this.teamdata[i].amount; 
     //console.log(this.total); 
      
      } 
      
      })
    }
  }