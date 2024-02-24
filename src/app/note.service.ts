import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Note } from './models/note';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  url:string= 'http://localhost:3000/notes';
   users_url:string='  http://localhost:3000/users ';
  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.url);
  }
  addNote(notedata:Note):Observable<Note>{
    return this.http.post<Note>(this.url,notedata)
  }
  addUsers(userdata:any){
    return this.http.post(this.users_url,userdata)
  }
  modifyNote(note: Note): Observable<Note> {
    const url = `${this.url}/${note.id}`;
    return this.http.put<Note>(url, note);
  }
  getNoteById(id: number): Observable<Note> {
    const url = `${this.url}/${id}`;
    return this.http.get<Note>(url);
  }
  deleteNote(noteId: number): Observable<Note> {
    const deleteUrl = `${this.url}/${noteId}`;
    return this.http.delete<Note>(deleteUrl);
  }
  getUsers():Observable<any>{
    return this.http.get(this.users_url)
  }
  }

