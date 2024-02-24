import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteService } from '../note.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
  user:any=[];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'password',
    'conformPassword',
    'gender',
    'phoneNumber',
    'street',
    'city',
    'state',
    'zipCode',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _noteService:NoteService,private _datasharingservice:DataSharingService) { }

  ngOnInit(): void {
    this._datasharingservice.getUserData().subscribe(
      (userData: any) => {
        console.log("not getted any data from register from",userData); // Log the received data to the console
        this.user = userData;
        this.dataSource = new MatTableDataSource(this.user);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error:any) => {
        console.error("Error occurred while fetching user data", error);
      }
    );
  }
  
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




   openEditForm(data:any){

   }
   deleteEmploye(id:number){

   }
}
