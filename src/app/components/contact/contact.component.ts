import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['../contact/contact.component.scss']
})
export class ContactComponent {
  nameFlag: boolean = false
  ageFlag: boolean = false
  emailFlag: boolean = false
  passFlag: boolean = false
  showLabel1(e: any) {
    e.target.value.length > 0 ? this.nameFlag = true : this.nameFlag = false;
  }
  showLabel2(e: any) {
    e.target.value.length > 0 ? this.ageFlag = true : this.ageFlag = false;
  }
  showLabel3(e: any) {
    e.target.value.length > 0 ? this.emailFlag = true : this.emailFlag = false;
  }
  showLabel4(e: any) {
    e.target.value.length > 0 ? this.passFlag = true : this.passFlag = false;
  }
}
