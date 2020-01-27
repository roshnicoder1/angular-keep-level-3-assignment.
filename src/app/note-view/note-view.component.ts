import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {
  errMessage:string;
  note:Note=new Note();
  notes:Array<Note>=[];
 constructor(private noteService: NotesService){

 }

 ngOnInit(){
  this.noteService.getNotes().subscribe(
    data=>{
      console.log(data);
      this.notes=data;
    },
    (error)=>{
      this.errMessage = error.message;
    }
    )
   this.note=new Note();

}

}
