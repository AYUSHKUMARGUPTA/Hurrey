import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public account = {
    name: null,
    mobile: null,
    email: null,
    userName: null
  }
  public readOnly: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.account.name = "TestName";
    this.account.mobile = 9191919191;
    this.account.userName = "user1";
    this.account.email = "user1@gmail.com";
  }
  validate() {
    if (this.account.name != "" && this.account.mobile != "" && this.account.userName != "" && this.account.email != "") {
      return true;
    } else {
      return false;
    }
  }

  public saveData(type) {
    if (type == 'Edit') {
      this.readOnly = false;
    }
    if (!this.readOnly) {

      let isValid = this.validate();
      if (isValid == true) {
        if (type == 'Save') {
          this.readOnly = true;
          Swal.fire("Success", "Item Saved Successfully", "success");
        } else {
          Swal.fire("Error", "Please fill all mandatory fields", "error");
        }
      }
    } else {
      Swal.fire("Error", "Please click on Edit button first!!!", "error");
    }


  }
}