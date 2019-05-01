import { ApisService } from './../../../../services/apis.service';import { from } from 'rxjs';
import { LocalStorageService } from  './../../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
  
    constructor(private fb: FormBuilder, private apiservice: ApisService,  private router : Router,  private lcs:LocalStorageService) { }
  
    loginform= this.fb.group({
      email : ['',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
    
    })
  
    submit = function(data) {
      
      this.apiservice.login(this.loginform.value).subscribe(data =>{
        this.userdata = data;
        if(this.userdata.status == 200){
          this.lcs.setlocalstorage(data.body.access_token);
         this.router.navigate(['dashboard/dashboard']);
  
        }
        else 
      
        { 
         alert('Session expired. Please login again');
        }
       });
  
     }
     ngOnInit(){
     }
  
  }
  