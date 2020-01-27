import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  errMessage:string;
  note:Note=new Note();
  //create array to store
  notes:Array<Note>=[];
  constructor(private noteService: NotesService){

  }

  takeNote(){
    if(this.note.text =='' || this.note.title=='')
    this.errMessage='Title and Text both are required fields';
    else{
    

    console.log(this.note);
    this.noteService.addNote(this.note).subscribe(
      data=>{this.notes.push(this.note);
      },(error)=>{
        this.errMessage = error.message;
      }
      

    )
    //push it here
    
   // this.note=new Note();
  }
}
}
