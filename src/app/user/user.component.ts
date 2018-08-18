import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../service/user.service';
import { JsonPipe } from '@angular/common';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:[ `./user.component.css` ]
})

export class UserComponent{

    title:string;
    constructor(public userService:UserService){
        this.title='User Details';
    }

    addUser(userForm:NgForm):void{
        console.log(userForm.value);
        this.userService.addUser(userForm.value);
        
    }  

}