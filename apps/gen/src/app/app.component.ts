import { Component } from '@angular/core';


@Component({
  selector: 'gen-x-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/configure', icon: 'settings', title: 'Configure' },
    { path: '/cli', icon: 'format_italic', title: 'Project CLI' },
    { path: '/feature', icon: 'extension', title: 'features' },
    { path: '/feature', icon: 'view_list', title: 'stack' },
  ];
  

  toggleSidenav() { }

}
