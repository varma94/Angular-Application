/* Use it outside of the file */
import { Component } from '@angular/core';

/* @Component contains the metadata which explaines the Typescript what 
   it should do when the following .ts file is converted ti Javascript. 
   {} -> This specifies the object .*/
@Component({
    /* selector is a string which define the html tag which can be used in other components */
    selector    : 'app-server',
    /* templateUrl is the path to the template html file*/
    templateUrl : './server.component.html',
    styles: [`
    .online {
        color:white
    }
    `]
})
export class ServerComponent {
 serverNumber: number = 10;
 serverStatus: string = 'offline';

 constructor(){
     this.serverStatus = Math.random()>0.5?'online':'offline';
 }

getColor(){
    return this.serverStatus==='online'?'blue':'red';
  }
 getServerStatus(){
     return this.serverStatus;
 }
}
