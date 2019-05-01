import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { ApisService } from '~/app/services/apis.service';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  constructor(private fb : FormBuilder, private apiservice : ApisService) { } 
  add_editteamform= this.fb.group({ 
  team_name : [''], 
  amount : [''] 
  
  }) 
  ngOnInit() { 
  } 
  
  addteam= function(data){ 
  // let data = {team_name: this.name.value, amount: this.amount.value}; 
  this.apiservice.addTeam(this.add_editteamform.value).subscribe(data =>{ 
  
  this.newteam = data; 
  console.log(this.newteam); 
  }); 
  }
}
