import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  imports: [],
  templateUrl: './videoplayer.component.html',
  styles: ``
})
export class VideoplayerComponent {

  videoIsplayed = false

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  public playVideo(){
    this.videoIsplayed = !this.videoIsplayed
    if(this.videoIsplayed){
      this.videoPlayer.nativeElement.play();
    }else{
      this.videoPlayer.nativeElement.pause();
    }
  }
}
