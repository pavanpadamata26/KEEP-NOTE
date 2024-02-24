import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../note.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteAddComponent } from '../note-add/note-add.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes: Note[] = [];
  showNoteAdd: boolean = false;
  toggleNoteAdd() {
    this.showNoteAdd = !this.showNoteAdd;
  }
   
  constructor(private noteService:NoteService,private _dialog:MatDialog,private activateRoute:ActivatedRoute,private _authservice:AuthService,private _route:Router) { 
    //this.getNotes();

  }
  openDialog(){
    const dialogRef=this._dialog.open(NoteAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      
      if (result) {
       
        console.log('Dialog result:', result);
  
       
        this.notes.push(result);
      }
    });
  }
 
  ngOnInit(): void {
    
    this.getNotes();
    
    
  }
  noteadded(addNote:Note){
    console.log('note addedd',addNote);
    this.getNotes();

  }

  onSearch(searchText: string) {
    if (searchText) {
      //this.getNotes();
      this.notes = this.notes.filter(note =>
        note.title?.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      // Reset the notes array to the original data
      this.getNotes();
      this.notes = NOTES;
    }
  }
   getNotes(){
    this.noteService.getNotes().subscribe(
      (success)=>{
        this.notes=success as Note[];
        
      },
      (error)=>{
        alert("Failed to Fetch Notes Due to Server Error !!");
      }
    )
    
  }
  removedNote(noteId:number){
    this.notes = this.notes.filter((note) => note.id !== noteId);
  

  }
  userlogOut(){
    this._authservice.logout();
    console.log("logout ed")
  
    // this._route.navigateByUrl('/login')
    // alert("ypu are logged out, plese login");
    this._route.navigateByUrl('/login').then(() => {
      // Delay the alert for 100 milliseconds (adjust as needed)
      setTimeout(() => {
        alert("You have logged out, please login again");
      }, 100);
    });
  }

}