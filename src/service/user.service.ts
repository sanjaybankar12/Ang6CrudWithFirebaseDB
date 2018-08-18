import { Injectable } from '@angular/core';

import { User } from '../model/user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class UserService{
    
    selectedUser:User=new User();
    usersList:AngularFireList<any>;
    constructor(private firebase:AngularFireDatabase,private router:Router,private toastrService:ToastrService){
        this.usersList=this.firebase.list("/users");
    }

    getData(){
       return this.usersList.snapshotChanges();
    }

    removeUser(key):void {
        this.usersList.remove(key);
        this.toastrService.success('User data successfully deleted','User Deleted');
    }

    addUser(user:User):void {
        console.log(user.$key);
        if(user.$key!=null && user.$key!="undefined" && user.$key.length>0){
             this.usersList.update(user.$key,{
                 name:user.name,
                 phone:user.phone,
                 gender:user.gender,
                 city:user.city,
                 state:user.state

             });
             this.toastrService.success('User successfully updated','User Updated');
             this.selectedUser=new User();
            this.router.navigate(['']);

            }else{
       
                this.usersList.push({
                    name:user.name,
                    phone:user.phone,
                    gender:user.gender,
                    city:user.city,
                    state:user.state
   
                });
                this.toastrService.success('User successfully added','User Inserted');
                this.selectedUser=new User();
                this.router.navigate(['']);

            }
        
    }

}
