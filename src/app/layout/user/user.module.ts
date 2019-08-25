import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './user.component';
import {PageHeaderModule} from '../../shared/modules';

@NgModule({
  declarations: [UserComponent],
  imports: [ CommonModule, UserRoutingModule , PageHeaderModule]
})
export class UserModule { }
