import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  constructor(public router:Router){

  }
  onHome(){
this.router.navigate(['./portfoliomodule/home']);
  }
  onAbout(){
   const aboutSection=document.getElementById('about')
   if(aboutSection){
    aboutSection.scrollIntoView({behavior:'smooth',block:'start'})
   }
  }
  onProjects(){
    const projectSection=document.getElementById('project')
    if(projectSection){
      projectSection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }
  onContact(){
    const contactSection=document.getElementById('conatct')
    if(contactSection){
      contactSection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }
}
