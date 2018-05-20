import {Component, HostBinding, OnInit} from '@angular/core';
import { fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css'],
  animations: [fadeInAnimation],
})
export class VideoHomeComponent implements OnInit {
@HostBinding('@fadeInAnimation') fadeInAnimation = '';
  constructor() { }

  ngOnInit() {
  }

}
