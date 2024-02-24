import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { passwordsMatchValidator } from '../myCustomValidations';
import { NoteService } from '../note.service';
import { DataSharingService } from '../services/data-sharing.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
}) 
export class RegisterFormComponent implements OnInit {
  
  //private _dialog:MatDialogRef<RegisterFormComponent>
  constructor(private _fb:FormBuilder,private _snackbar:MatSnackBar,private _noteservice:NoteService,private _datasharingservice:DataSharingService) { }
  

  ngOnInit(): void { }
    RegistrationForm = this._fb.group({
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      conformPassword:['',[Validators.required,this.passwordsMatchValidator]],
      gender:[''],
      age:[0,[Validators.required,Validators.min(18)]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^[789]\d{9,9}$/)]],
      address :this._fb.group({
        street:['',],
        city:[''],
        state:[''],
        zipCode:['',Validators.pattern(/^\d{5}(?:\d{1})?$/)]

      })

    })


    get firstName(){
      return this.RegistrationForm.get("firstName")
    }
    get lastName(){
      return this.RegistrationForm.get("lastName")
    }
    get email(){
      return this.RegistrationForm.get("email")
    }
    get password(){
      return this.RegistrationForm.get("password")
    }
    get conformPassword(){
      return this.RegistrationForm.get("conformPassword")
    }
    get age(){
      return this.RegistrationForm.get("age")
    }
    get phoneNumber(){
      return this.RegistrationForm.get("phoneNumber")
    }
    get zipCode(){
      return this.RegistrationForm.get("address.zipCode")
    }
    onSubmit() {
      this._noteservice.addUsers(this.RegistrationForm.value).subscribe(
        (data:any)=>{
           //console.log(this.RegistrationForm.value);
           this._noteservice.getUsers().subscribe(
            (userData:any)=>{
              this._datasharingservice.setUserData(userData);
              console.log('User data set:', userData);
            },
            (error)=>{
              alert("Error occured while feting data")
            }
           )



        this._snackbar.open('Congrats!!You have submiited the form!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary'],
          verticalPosition:'top'
        })

      },
      (error)=>{
        alert("Error While registering the usesr")

      })
      
     
     
    }

// mustMatchValidator(fg: AbstractControl) {
//   const passwordValue = fg.get("password")?.value;
//   const confirmPasswordValue = fg.get("confirmPassword")?.value;
//   if (!passwordValue || !confirmPasswordValue) {
//     return null;
//   }
//   if (passwordValue != confirmPasswordValue) {
//       return { mustMatch: false }
//   }
//   return null;
// }
passwordsMatchValidator(control: AbstractControl) {
    const password = control.parent?.get('password').value;
    const confirmPassword = control?.value;

    if (password !== confirmPassword) {
      return { passwordsNotMatch: true };
    }

    return null;
  }
  }
