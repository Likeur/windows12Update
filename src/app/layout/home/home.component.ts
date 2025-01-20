import { Component } from '@angular/core';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';
import { SettingsComponent } from '../../components/settings/settings.component';
import { CommonModule } from '@angular/common';
import { VideoplayerComponent } from '../../components/videoplayer/videoplayer.component';

@Component({
  selector: 'app-home',
  imports: [TaskbarComponent, SettingsComponent, VideoplayerComponent,CommonModule],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

  public isInFront = false

  public bringToFront(){
    this.isInFront = !this.isInFront
  }


}
