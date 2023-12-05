import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LOGIN_FORM} from "./login.form";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;
  invalideCreds: boolean = false;

  constructor(
    builder: FormBuilder,
    private router: Router,
    private readonly $authServ: AuthService,
  ) {
    this.form = builder.group(LOGIN_FORM)
  }

  onSubmit() {
    if (this.form.valid) {
      this.$authServ.connect(this.form.value!.username!, this.form.value!.password!).subscribe({
        next:() => this.router.navigateByUrl("/home"),
        error:() => {
          this.invalideCreds = true;
          this.form.reset();
        }
      })
    }
  }
}
