import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  @Input() property_name : any
  // Property : any=
  //   {
  //     "Id":1,
  //     "Name":"House of Antaak",
  //     "Type":"House",
  //     "Price": 120000
  //   }
  constructor() { }

  ngOnInit() {
    console.log("Property Array",this.property_name)
  }

}
