import { Component, ElementRef, ViewChild } from '@angular/core';
import { IVideo } from '../../interfaces/vid.interface';

@Component({
  selector: 'app-videoplayer',
  imports: [],
  templateUrl: './videoplayer.component.html',
  styles: ``
})
export class VideoplayerComponent {

  public videosAvailable : IVideo[] = [
    {name:"video 1", linktovideo:"/videos/vidtest.mp4"},
    {name:"video 2", linktovideo:"/videos/vidtest2.mp4"},
    {name:"video 3", linktovideo:"/videos/vidtest3.mp4"}
  ]

  public videoIsplayed = false

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  public playVideo(){
    this.videoIsplayed = !this.videoIsplayed
    if(this.videoIsplayed){
      this.videoPlayer.nativeElement.play();
    }else{
      this.videoPlayer.nativeElement.pause();
    }
  }

  public currentVideo: string = this.videosAvailable[0].linktovideo; // Vidéo par défaut

  public changeVideo(videoUrl: string) {
    this.currentVideo = videoUrl;
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause(); // Pause la vidéo
      this.videoPlayer.nativeElement.load();
      this.videoPlayer.nativeElement.play(); // Joue la vidéo
    }
  }
}
