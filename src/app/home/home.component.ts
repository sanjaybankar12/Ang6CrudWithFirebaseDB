import { Component,OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

import { Router } from '@angular/router';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:[ `./home.component.css` ]
})

export class HomeComponent implements OnInit{

    title:string;
    userList:User[];
    constructor(private userService:UserService,private router:Router){
        this.title='User Details';
    }

    ngOnInit(){
        this.getUsers();
    }

    getUsers():void {
        this.userService.getData().subscribe(item => {

            this.userList=[];
            item.forEach(element => {
                let payloadJson=element.payload.toJSON();
                payloadJson['$key']=element.key;
                console.log(payloadJson);

                this.userList.push(payloadJson as User);

            });
        });
    }

    updateUser(user:User):void {
        if(confirm("Do you want to edit user data?")){
            this.userService.selectedUser=user;
            this.router.navigate(['user']);
        }
    }

    removeUser(key):void {
        if(confirm("Do you want to delete this record?")){
            this.userService.removeUser(key);
        }
    }
}