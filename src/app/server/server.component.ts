/* Use it outside of the file */
import { Component } from '@angular/core';

/* @Component contains the metadata which explaines the Typescript what 
   it should do when the following .ts file is converted ti Javascript. 
   {} -> This specifies the object .*/
@Component({
    /* selector is a string which define the html tag which can be used in other components */
    selector    : 'app-server',
    /* templateUrl is the path to the template html file*/
    templateUrl : './server.component.html'
})
export class ServerComponent {

}
