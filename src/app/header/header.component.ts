import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private routeService:RouterService){

  }
  isNoteView = true;
  switchToListView(){
    if(this.isNoteView){
      this.routeService.routeToListView();
      this.isNoteView=false;
      }

  }
  switchToNoteView(){
    // console.log("switch view");
   
    this.routeService.routeToNoteView();
    this.isNoteView=true;
    
    
    
    }

}
