import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'sethmwebi', email: 'sethmwebi27@gmail.com' },
    { username: 'cory', email: 'cory@gmail.com' },
    { username: 'greg', email: 'greg@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'sethmwebi', email: 'sethmwebi27@gmail.com' };
  }
}
