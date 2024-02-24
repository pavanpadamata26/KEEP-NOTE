import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note?: Note;
  @Output() noteDeleted: EventEmitter<number> = new EventEmitter<number>();
  constructor(private _noteservice:NoteService,private _router:Router) { }

  ngOnInit(): void {
  }
 
  confirmDelete() {
    const userConfirmed = window.confirm('Are you sure you want to delete this note?');
  
    if (userConfirmed) {
      this._noteservice.deleteNote(this.note!.id).subscribe(
        () => {
          this.noteDeleted.emit(this.note.id)
          // Navigate to "note-view" route
          this._router.navigate(['/note-view']);
        },
        (error) => {
          console.error('Error deleting the note:', error);
          // Handle the error as needed
        }
      );
    }
    else{
      this._router.navigate(['/note-view']);
    }
  }
  
  // Function to remove the deleted note from your data
  
  
}
