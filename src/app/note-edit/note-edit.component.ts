import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note:Note={
    id: 0,
    title: '',
    content: '',
   
  }
  changesSaved:boolean=false;
  constructor(private _route:ActivatedRoute,private _noteservice:NoteService,private _router:Router ) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    if (id) {
      // Fetch the existing note by ID for editing
      this._noteservice.getNoteById(id).subscribe(note => {
        this.note = note;
      });
    }
    this._route.queryParams.subscribe(params => {
      this.note.title = params['title'] || '';
      this.note.content = params['content'] || '';
    });
  }
   
  
   editNote(){
    // this._noteservice.modifyNote(this.note).subscribe(
    //   (modifydata)=>{
    //     alert("note Modified");
    //     this._router.navigate(['/note-view'])

    // },
    // (error) => {
    //   console.error("Error modifying note:", error);
    // })
    this._noteservice.modifyNote(this.note).subscribe(
      (modifydata) => {
        alert("Note Modified");
        this.changesSaved = true; // Mark changes as saved
        this._router.navigate(['/note-view']);
      },
      (error) => {
        console.error("Error modifying note:", error);
      }
    );
   }
   canExist(){
  
  //   if(this.note.title.length>0 || this.note.content.length>0){
  //     return confirm("data will be discarded .\nare u sure? ")
  //   }
  //   else{
  //     return true;
  //   }
  // }
  if (this.changesSaved) {
    // If changes are saved, allow navigation without confirmation
    return true;
  } else if (this.note.title.length > 0 || this.note.content.length > 0) {
    // If there are unsaved changes, display confirmation dialog
    return confirm("Data will be discarded.\nAre you sure?");
  } else {
    return true;
  }
}
}
