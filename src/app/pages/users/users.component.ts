import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/interfaces/user';
import { NgForOf } from '@angular/common';
import { ExcelService } from '../../../core/services/download-document';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: User[] = [];
  private _userService: UserService = inject(UserService);
  private _downloadExcel: ExcelService = inject(ExcelService)
  constructor(){
    this._userService.getUsers(1).subscribe((data) => this.users = data.results)

  }

  public downloadUsers(): void {
    this._downloadExcel.exportAsExcelFile(this.users, 'users')
  }
}
