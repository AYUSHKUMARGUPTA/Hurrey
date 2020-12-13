import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hurrey';
  public login = {
    username: null,
    password: null
  }
  public loginFlag = true;
  constructor(public router: Router) {

  }
  ngOnInit() {

  }
  submit() {
    if (this.login.username === "A" && this.login.password === "A") {
      this.loginFlag = false;
      this.router.navigate(['/Dashboard'])
    }
    else {
      Swal.fire("Error", "Your Id password is wrong", "error")
    }
  }
}
