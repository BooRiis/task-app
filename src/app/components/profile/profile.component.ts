import { Component, OnInit } from '@angular/core';
import {Data, User, Contact, LocationElement, Address, SocialNetwork} from '../../../assets/interface/user-info'
import dataJson from '../../../assets/data.json'
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  defaultData!: Data;
  user!: User;
  contact!: Contact;
  location!: LocationElement[];
  addres!: Address;
  socialNetwork!: SocialNetwork;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showConfig()
  }

  showConfig() {
    this.api.getConfig()
    .subscribe((data: Data) => {
      this.defaultData = data;
      this.user = data.user;
      this.contact = data.user.contact;
      this.location = data.user.contact.locations;
      this.addres = data.user.contact.locations[0].address;
      this.socialNetwork = data.user.contact.socialNetworks[0]
    }) 
  }

}
