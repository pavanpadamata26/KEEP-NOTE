// 
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private userDataSubject:any;

  setUserData(data: any) {
    console.log('DataSharingService - Data received:', data);
    this.userDataSubject=data;
  }

  // getUserData(): Observable<any> {
  //   return this.userDataSubject.asObservable().pipe(
  //     catchError((error) => {
  //       console.error('DataSharingService - Error:', error);
  //       throw error; // Rethrow the error to propagate it to the component
  //     })
  //   );
  // }
  getUserData(): Observable<any> {
    return this.userDataSubject;
    console.log("data returned successfully")
      
}
}
