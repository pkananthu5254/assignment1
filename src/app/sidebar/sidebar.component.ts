import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isOpenMenu:boolean = true;
  public progress = 0;

  @ViewChild('bar')
  bar!: ElementRef;

  get progressPercentage() {
    return Math.floor(this.progress * 50);
  }

  ngOnInit() {
    setInterval(() => {
      this.progress += 0.001;
      if (this.progress >= 1) {
        this.progress = 0;
      }
    }, 0);
  }
}
