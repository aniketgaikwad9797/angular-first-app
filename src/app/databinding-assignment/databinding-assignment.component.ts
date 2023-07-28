import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css'],
})
export class DatabindingAssignmentComponent {
  username = '';
  userNameFlag = this.username.length;
  resetUsername() {
    this.username = '';
  }
}
