import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { UserComponent } from '../app/user/user.component';

const appRotes:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
]

export const MyRoutingModel:ModuleWithProviders=RouterModule.forRoot(appRotes);