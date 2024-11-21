import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../experience';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { Experience1 } from '../experience1';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HomeComponent], // add CommonModule for ngFor
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Input()experiences:(Experience & Experience1)[]=[]; 
@Output() sendDataTopar = new EventEmitter<string>();

sendData(){
 const value = "Sorry,File Not exist !"
 this.sendDataTopar.emit(value)
}




}
