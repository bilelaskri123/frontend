import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/models/user';
import { error } from 'util';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public users: any ;
    public id: number;

    constructor(private userService: UserService) {
        this.getUsers();
    }

    ngOnInit() {
    }

    getUsers() {
        this.userService.findAllUsers().subscribe((data: any) => {
                console.log('----- data is ------ ', data);
                this.users = data;
        }
        );
    }

    createUsers(user: User) {
        this.userService.createUser(user)
            .subscribe((data) => {
                console.log('user created successfully');
                location.reload();
            });
    }

    deleteUser(id: number) {
        this.userService.deleteById(id)
        .subscribe((data) => {
          console.log('user deleted successfully! ') ;
          location.reload() ;

        });
    }
}
