import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-combining-music',
  templateUrl: './combining-music.component.html',
  styleUrls: ['./combining-music.component.scss']
})
export class CombiningMusicComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Combining Music Streaming Services - James Watson");
  }

}
