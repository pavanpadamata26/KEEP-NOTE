import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './app/register-form/register-form.component';
import { NoteViewComponent } from './app/note-view/note-view.component';
import { NoteEditComponent } from './app/note-edit/note-edit.component';
import { NoteDeleteComponent } from './app/note-delete/note-delete.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { LoginComponent } from './app/login/login.component';
import { AuthGuard } from './app/services/auth.guard';
import {  NoteeditGuard } from './app/services/noteedit.guard';
import { RegisterUsersComponent } from './app/register-users/register-users.component';


const routes: Routes = [
    // { path: "", redirectTo: "/login", pathMatch: "full" },
    {path:'',component:LoginComponent},
    {path: "register-form",canActivate:[AuthGuard ], component: RegisterFormComponent },
    { path: 'note-view',canActivate:[AuthGuard ], component: NoteViewComponent },
    {path: 'note-edit/:id',canDeactivate:[ NoteeditGuard],component:NoteEditComponent},
    {path: 'note-delete',component:NoteDeleteComponent},
    {path:'login',component:LoginComponent},
    {path:'register-users',component:RegisterUsersComponent},
    { path: "**", component: PageNotFoundComponent }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }