import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

  headElements = [
    '#',
    'Ad',
    'Soyad',
    'Email',
    'Əlaqə nömrəsi',
    'İstifadəçi adı',
    '',
  ];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.appService.getList({}, this.appService.USERS).subscribe((res) => {
      this.users = res;
    });
  }

  deleteItem(id: number) {
    this.appService.deleteData(id, this.appService.USERS).subscribe((res) => {
      this.getUsers();
    });
  }
}
