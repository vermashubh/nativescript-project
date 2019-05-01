import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from './../../../../services/apis.service';
import { Component, OnInit } from '@angular/core';
import { Team } from './team';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teamList: any;

  
// teamdata: any; 
heading="Team's Revenue"; 
sticky: boolean = false; 

menuPosition: any; 
teamdata: any; 
constructor(private myService: ApisService,private router:Router, private activatedroute: ActivatedRoute) { } 

selectedTeam: Team; 

onSelect(t: Team){ 
this.selectedTeam = t; 
this.router.navigate(['/dashboard/dashboard',t.team_id]); 
// console.log(this.selectedTeam.team_id); 
}
  ngOnInit() {
 
     this.myService.getTeams().subscribe(response => {
       this.teamList = response.data;

console.log(this.teamList);
    })

  }

}
