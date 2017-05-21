import { Component, OnInit } from '@angular/core';

@Component({
  /* selecting component by element. If your using components then you would mostly
     use selecting components by elements */
  selector: 'app-servers',
  /* selecting component by attribute */
 // selector: '[app-servers]',
  /* selecting component by class */
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer:boolean = false;
  serverCreated:string = "No server was created";
  serverName = 'TestServer';
  constructor() { 
    setTimeout(()=>{
      this.allowAddServer = true;
    },2000)
  }

  ngOnInit() {
  }

}
