import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/models/user';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public users: any ;
    public id: number;

<<<<<<< HEAD
    constructor(private router: Router , private userService: UserService) {}
=======
    constructor(private userService: UserService) {
        this.getUsers();
    }
>>>>>>> ee171e65007fd3f6898ccdae159305e5eb9c7a40

    ngOnInit() {
    }

    getUsers() {
<<<<<<< HEAD
         this.userService.findAllUsers()
         .subscribe(data => {
             console.log(data);

          this.users = data ;
          console.log('-------' + this.users[0].softSkills) ;
=======
        this.userService.findAllUsers().subscribe((data: any) => {
                console.log('----- data is ------ ', data);
                this.users = data;
        }
        );
    }
>>>>>>> ee171e65007fd3f6898ccdae159305e5eb9c7a40

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
    soft(num: number) {
        localStorage.setItem('id', num.toString() )  ;
        console.log(localStorage.getItem('id'))  ;
        this.router.navigate(['/soft-skill']);
    }
}
