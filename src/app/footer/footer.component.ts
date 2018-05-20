import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [fadeInAnimation]
})
export class FooterComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';

  constructor() { }

  ngOnInit() {
  }

}
