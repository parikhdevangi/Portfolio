import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public router:Router){

  }
onHome(){
  window.scrollTo({top:0,behavior:'smooth'});
}
onAbout(){
  const aboutSection=document.getElementById('about')
  if(aboutSection){
   aboutSection.scrollIntoView({behavior:'smooth',block:'start'})
  }
}
onProject(){
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
