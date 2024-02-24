import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { NoteEditComponent } from '../note-edit/note-edit.component';

@Injectable({
  providedIn: 'root'
})
export class NoteeditGuard implements CanDeactivate<NoteEditComponent> {
   canDeactivate(component: NoteEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return component.canExist();
   }
  
}
