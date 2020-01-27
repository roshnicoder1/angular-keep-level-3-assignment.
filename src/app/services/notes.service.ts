import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

 @Injectable()
 export class NotesService {
  notes: Array<Note>=[];
  notesSubject: BehaviorSubject<Array<Note>> ;
    constructor(private httpClient: HttpClient,private  auth :AuthenticationService ) {
      this.notes = [];
    this.notesSubject = new BehaviorSubject(this.notes);
     }

  

  fetchNotesFromServer() {
    let myToken = 'Bearer '+this.auth.getBearerToken();
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',
    {
      headers : {'Authorization':myToken}
    }).subscribe((data)=>{
      this.notes=data;
      this.notesSubject.next(this.notes);
    },(err)=>{});

  }

  getNotes(): BehaviorSubject<Array<Note>> {
    return this.notesSubject;

  }

   addNote(note: Note): Observable<Note> {
    let myToken = 'Bearer '+this.auth.getBearerToken();
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',
    note,
    {
      headers : 
      {'Authorization':myToken
      }
    }).do(addedNote =>{
      this.notes.push(addedNote);
      this.notesSubject.next(this.notes);
    });
  
   }

   editNote(note: Note): Observable<Note> {
    let myToken = 'Bearer '+this.auth.getBearerToken();
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,
    {
      headers : 
      {'Authorization':myToken
      }
    }).do(addedNote=>{
      const note=this.notes.find(currentNote=>currentNote.id===addedNote.id);
      Object.assign(note,addedNote);
      this.notesSubject.next(this.notes);
    });

   }

   getNoteById(noteId): Note {
     const note=this.notes.find(note=>note.id===noteId);
     return Object.assign({},note);

   }
 }
