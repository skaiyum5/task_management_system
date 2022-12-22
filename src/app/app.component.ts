import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  // @ViewChild('task') task: ElementRef | undefined;
taskList:any[]=[];
tasks=2
addTask(){
this.taskList=[...this.taskList, this.taskList.length]
}

ngOnInit() {
 console.log( window.localStorage.getItem(JSON.parse('Tasks')))
}
//   windows.localStorage.names = JSON.stringify(names);
// var storedNames = JSON.parse(localStorage.names);



}
