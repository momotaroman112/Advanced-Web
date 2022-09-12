import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  comment!: string;
  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6236168',
      name: 'Kiadtisak',
      gender: 'Male',
      birthyear: 2000,
      email: 'b6236168@g.sut.ac.th',
      phone: '0803347702',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Oh_Se-hun_at_Rimowa_Essential_Poly_Color_Collection_Launch_on_July_5%2C_2019.png/330px-Oh_Se-hun_at_Rimowa_Essential_Poly_Color_Collection_Launch_on_July_5%2C_2019.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  getName() {
    return this.profile.name;
  }
  getStid(){
    return this.profile.studentid;
  }
  getGender(){
    return this.profile.gender;
  }
  getBy() {
    return this.profile.birthyear;
  }
  getEm(){
    return this.profile.email;
  }
  getPhone(){
    return this.profile.phone;
  }
  getImg() {
    return this.profile.img;
  }
  
  getComm(){
    return this.profile.comment;
  }

  onAddClick($e?:any){
    alert(this.profile.address);
  }

}
