import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule,Route, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { NotesService } from './services/notes.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import {NoteTakerComponent} from './note-taker/note-taker.component';
import {NoteViewComponent} from './note-view/note-view.component';
import {NoteComponent} from './note/note.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import {MatSelectModule} from '@angular/material/select';
import { ListViewComponent } from './list-view/list-view.component';










const routes: Routes=[
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[CanActivateRouteGuard],
   children:[
     {path:'view/noteview',component:NoteViewComponent},
     {path:'', redirectTo:'view/noteview',pathMatch:'full'},
     {path:'view/listview',component:ListViewComponent},
     {path:'note/:noteId/edit',component:EditNoteOpenerComponent,
    outlet:'noteEditOutlet'}
   ]
}

  ];
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NoteTakerComponent,
    NoteViewComponent,
    NoteComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent,
    ListViewComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
    
  
  ],
  providers: [NotesService,AuthenticationService,RouterService,CanActivateRouteGuard],
  bootstrap: [AppComponent],
  entryComponents:[EditNoteViewComponent]
})
export class AppModule { }
