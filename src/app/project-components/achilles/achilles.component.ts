import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-achilles',
  templateUrl: './achilles.component.html',
  styleUrls: ['./achilles.component.scss']
})
export class AchillesComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Achilles Rupture Recovery Application - James Watson");
  }

}
