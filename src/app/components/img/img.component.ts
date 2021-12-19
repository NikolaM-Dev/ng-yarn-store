import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() imgUrl: string = 'initial value';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';

  constructor() {}

  ngOnInit(): void {}

  imgError(): void {
    this.imgUrl = this.imgDefault;
  }

  imgLoaded(): void {
    console.log('Log child');
    this.loaded.emit(this.imgUrl);
  }
}
