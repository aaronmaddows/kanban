import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';



@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  isShown: boolean = false; // hidden by default
  startDate = new Date(2000, 0, 2);

  board: Board = new Board('Test Board',[
    new Column('Ideas', [
      "Some random Idea",
      "This is another random Idea",
      "3333"
    ]),
    new Column('Reasearch', [
      "Some random Research",
      "This is another random Research",
      "4444"
    ]),
    new Column('ToDO', [
      "ToDO"
    ]),
    new Column('Done', [
      "Done"
    ])
  ])

  toggleShowTaskCreate(columnname:string) {
    this.isShown = !this.isShown;
  }

  Button_Create_New_Task(colname:string) {
    alert(colname);
  }
  Button_Debug() {
    alert("TEST")
  }

  
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  events: string[] = [];


}
