import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MyRoutingModel } from '../routing/routing.model';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FooterComponent} from './footer/footer.component';

import { UserService } from '../service/user.service';
import { environment } from '../environments/environment';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports:[ BrowserModule,FormsModule,MyRoutingModel,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule,ToastrModule.forRoot() ],
    declarations:[ AppComponent,HomeComponent,UserComponent,FooterComponent ],
    providers:[ UserService ],
    bootstrap:[ AppComponent ]
})

export class AppModule{

}