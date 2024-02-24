import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../note.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { DatePipe } from '@angular/common';
//import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  // showForm: boolean = false;
  
  // noteTitle: string = '';
  // noteContent: string = '';
  
  // toggleForm() {
  //   this.showForm = !this.showForm;
  // }
  notes: Note[] = [];
  
  newNote: Note = {
    title: '',
    content: '',
    reminderDate: '',
    category: '',
    priority: 'Low',
    
  };
  constructor(private noteService:NoteService,private _dialogRef:MatDialogRef<NoteAddComponent>,private datepipe:DatePipe,private _snackbar:MatSnackBar) {}
  
  @Output() noteAdded=new EventEmitter<Note>();


  ngOnInit(): void {
    
    
  }
  
   
 

  addNote() {
    this.noteService.addNote(this.newNote).subscribe(
      (success) => {
        this._dialogRef.close(success);
        console.log(success);
        this.newNote = {
          title: '',
          content: ''
        };
        this.noteAdded.emit(success);
        this._snackbar.open('Note inserted', 'Close', {
          duration: 3000, 
        });
      },
      (error) => {
       
        this._snackbar.open('Note not inserted', 'Close', {
          duration: 3000, 
          panelClass: ['error-snackbar'], 
        });
      }
    );
  }
  
  
  // addNote(){
  //   this.noteService.addNote(this.newNote).subscribe(
  //     (success)=>{
  //       //this.ngOnInit();
  //       alert('note inserted');
  //       this._dialogRef.close(success);
  //       console.log(success);
  //      this. newNote= {
          
  //         title: '',
  //         content: ''
  //       };
  //       this.noteAdded.emit(success);

      

  //     },
  //     (error)=>{
  //       alert("not inserted")
  //     }
  //   )
    

      

    
    
  }
  // validateDate(control: AbstractControl): { [key: string]: boolean } | null {
  //   const selectedDate = new Date(control.value);
  //   const today = new Date();

  //   if (!selectedDate || isNaN(selectedDate.getTime())) {
  //     // Date is blank
  //     return { required: true };
  //   }

  //   if (selectedDate < today) {
  //     // Date is in the past
  //     return { dateInvalid: true };
  //   }

  //   return null; // Date is valid
  // }





  




