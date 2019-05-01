import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '~/app/services/apis.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logout: any;

  constructor(private router : Router, private apiservice : ApisService) { }

  ngOnInit() {
  }
  add(){
    this.router.navigate(['addedit/addedit'])
  }
  out(){ 
    // localStorage.clear(); 
    // this.router.navigate([""]); 
    this.apiservice.logout().subscribe(response =>{ 
    this.logout= response; 
    localStorage.clear(); 
    this.router.navigate([""]); 
    // console.log(this.logout); 
    }) 
    }

}
