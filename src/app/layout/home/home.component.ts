import { Component } from '@angular/core';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';
import { SettingsComponent } from '../../components/settings/settings.component';

@Component({
  selector: 'app-home',
  imports: [TaskbarComponent, SettingsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
