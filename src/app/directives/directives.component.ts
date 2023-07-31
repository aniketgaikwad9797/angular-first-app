import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  serverId: number = 25;
  serverStatus: string = 'online';

  getColor() {
    return this.serverStatus == 'offline' ? 'red' : 'green';
  }
}
