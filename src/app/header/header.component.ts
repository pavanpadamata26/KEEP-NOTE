import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //private _dailog:MatDialog
  constructor() { }
 

  ngOnInit(): void {
  }
  // openRegisterForm(){
  //   const dialogRef=this._dailog.open(RegisterFormComponent)
  // }

}
