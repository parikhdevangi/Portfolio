import { Component, EventEmitter, Input,Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { Experience } from '../experience'; // Interface
import { CommonModule } from '@angular/common'; // Add this module when you are using ngFor
import { Experience1 } from '../experience1';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutComponent, CommonModule,ContactComponent], // Import the ChildComponent here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //Parent Component
  experiences: (Experience & Experience1 )[] = [
    {
      name:'HTML',
      level:'Experience',
      dbName:'C#',
      dbExperties:'Intermediate',
    },
    {
      name:'CSS',
      level:'Experience',
      dbName:'SQLServer',
      dbExperties:'Basic'
    },
    {
      name: 'Typescript',
      level: 'Intermediate',
      dbName:'MySql',
      dbExperties:'Intermediate'
    },
    {
      name:'Bootstrap',
      level:'Intermediate',
      dbName:'Git',
      dbExperties:'Basic'
    },
    {
      name:'Bootstrap',
      level:'Intermediate',
      dbName:'Git',
      dbExperties:'Basic'
    }, {
      name:'Bootstrap',
      level:'Intermediate',
      dbName:'Git',
      dbExperties:'Basic'
    }
  ];
  GetDataForChild(value:any){
    alert(value)
  }

}

