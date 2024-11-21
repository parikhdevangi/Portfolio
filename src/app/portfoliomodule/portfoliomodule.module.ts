import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliomoduleRoutingModule } from './portfoliomodule-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfoliomoduleRoutingModule,
    
  ],
  exports:[
    
  ]
})
export class PortfoliomoduleModule { }
