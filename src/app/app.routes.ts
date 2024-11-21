import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadChildren:()=>import('./portfoliomodule/portfoliomodule.module').then(m=>m.PortfoliomoduleModule)}
];
