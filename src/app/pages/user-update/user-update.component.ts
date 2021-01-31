import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  new_user: any = {
    username: '',
    phone: '',
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isPremium: [false],
    });
  }

  addItem() {
    this.appService
      .postdata(this.form.value, this.appService.REGISTER)
      .subscribe(
        (res) => {
          console.log('Hey dude');
          this.router.navigate(['/users']);
          console.log(res);
        },
        (err) => {
          if (err.status === 200) {
            this.router.navigate(['/users']);
          }
        }
      );
  }
}
