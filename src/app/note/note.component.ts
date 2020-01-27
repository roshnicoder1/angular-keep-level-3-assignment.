import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  constructor(private routerservice :RouterService){

  }
  @Input()
  note:Note;
  editNote(){
  
    this.routerservice.routeToEditNoteView(this.note.id);
  }



}
