import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  cities = ["DASMA","IMUS","SILANG","BACOOR","GMA"]
  selectedCity = this.cities[0]

  addUserForm:FormGroup

  constructor(
    public dialogRef : MatDialogRef<AddUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      user_detail_name: new FormControl('', Validators.compose([Validators.required])),
      user_detail_username: new FormControl('', Validators.compose([Validators.required])),
      user_address_city: [''],
      user_address_street: new FormControl('', Validators.compose([Validators.required])),
      user_address_suite: new FormControl('', Validators.compose([Validators.required])),
      user_company_name: new FormControl('', Validators.compose([Validators.required])),
      user_company_bs: new FormControl('', Validators.compose([Validators.required])),
      user_company_cs: new FormControl('', Validators.compose([Validators.required]))
    })

    this.addUserForm.controls['user_detail_name']
    // this.searchForm = this.fb.group({
    //   searchTerm: "",
    // });
  }

  onSubmit() {
    console.log(this.addUserForm.value)
    let data = {
      name: this.addUserForm.controls['user_detail_name'].value,
      username: this.addUserForm.controls['user_detail_username'].value,
      address : {
        city: this.selectedCity,
        suite: this.addUserForm.controls['user_address_suite'].value,
        street: this.addUserForm.controls['user_address_street'].value
      },
      company : {
        name: this.addUserForm.controls['user_company_name'].value,
        catchPhrase: this.addUserForm.controls['user_company_cs'].value,
        bs: this.addUserForm.controls['user_company_bs'].value
      }
    }
    this.dialogRef.close(data)
  }

}
