import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IVideo } from '../../interfaces/vid.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videoplayer',
  imports: [CommonModule],
  templateUrl: './videoplayer.component.html',
})
export class VideoplayerComponent {

  public videosAvailable : IVideo[] = [
    {name:"video 1", linktovideo:"/videos/vidtest.mp4"},
    {name:"video 2", linktovideo:"/videos/vidtest2.mp4"},
    {name:"video 3", linktovideo:"/videos/vidtest3.mp4"}
  ]

  public videoIsplayed = false
  public videoIsMuted = false

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  public playVideo(){
    this.videoIsplayed = !this.videoIsplayed
    if(this.videoIsplayed){
      this.videoPlayer.nativeElement.play();
    }else{
      this.videoPlayer.nativeElement.pause();
    }
  }

  public muteVideo(){
    this.videoIsMuted = !this.videoIsMuted
    if(this.videoPlayer){
      this.videoPlayer.nativeElement.muted = this.videoIsMuted;
    }
  }

  public currentVideo: string = this.videosAvailable[2].linktovideo; // Vidéo par défaut

  public changeVideo(videoUrl: string) {
    this.currentVideo = videoUrl;
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause(); // Pause la vidéo
      this.videoPlayer.nativeElement.load(); // Joue la vidéo
    }
  }

  public openVideoList = false

  public toggleVideoList(){
    this.openVideoList = !this.openVideoList
  }
}
