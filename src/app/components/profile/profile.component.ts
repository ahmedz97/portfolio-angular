import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: '../profile/profile.component.html',
  styleUrls: ['../profile/profile.component.scss']
})
export class ProfileComponent {
  imgArr: string[] = [
    "assets/images/fayoum1.jpg",
    "assets/images/fayoum2.jpg", 
    "assets/images/fayoum3.jpg",
    "assets/images/fayoum4.jpg", 
    "assets/images/fayoum6.jpg", 
    "assets/images/fayoum7.jpg"
  ];
  imgFlag: boolean = false;
  imgSrc: string = ''
  imgIndexAlt: string = ''

  showModal(src: string, index: number) {
    this.imgSrc = src
    this.imgIndexAlt = `FayoumImg${++index}`
    console.log(this.imgSrc);
  }

  nextModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const nextIndex = (currentIndex + 1) % this.imgArr.length;
    this.imgSrc = this.imgArr[nextIndex];
  }

  prevModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const prevIndex = (currentIndex - 1 + this.imgArr.length) % this.imgArr.length;
    this.imgSrc = this.imgArr[prevIndex];
  }
}