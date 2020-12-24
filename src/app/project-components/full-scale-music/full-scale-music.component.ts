import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-full-scale-music',
  templateUrl: './full-scale-music.component.html',
  styleUrls: ['./full-scale-music.component.scss']
})
export class FullScaleMusicComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Building A Full-Scale Music Streaming Web Application - James Watson");
  }

}
