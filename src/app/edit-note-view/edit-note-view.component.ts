import { Component, Inject, OnInit } from '@angular/core';
import { Note } from '../note';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../services/notes.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit{
  
  constructor(private dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA)private data:any,private noteService : NotesService,private routeService:RouterService){

  }
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;
  note: Note;
  ngOnInit(){
    this.note=this.noteService.getNoteById(this.data.noteId);
  
  }
  

  saveNote() {
    this.noteService.editNote(this.note).subscribe((data)=>{
      this.dialogRef.close();
    },
      error=>{
        this.errMessage=error.message;

      }
    )


  }
}
