import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from 'src/app/dialog/add-user/add-user.component';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  @Input("list") list
  @Output() selectItemEvent = new EventEmitter<any>();
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit() {
  }

  select(user) {
    console.log(user)
    this.selectItemEvent.emit(user)
    // this.selectedUser = user
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "500px",
      height: "500px"
    })
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
      if(data) {
        this.newItemEvent.emit(data)
      }
    })
  }

}
