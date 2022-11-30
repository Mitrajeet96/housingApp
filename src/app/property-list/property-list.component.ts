import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties : Array<any>=[
  {
    "Id":1,
    "Name":"House of Antaak",
    "Type":"House",
    "Price": 120000
  },
  {
    "Id":2,
    "Name":"House of D'Ghor",
    "Type":"Apartment",
    "Price": 150000
  },
  {
    "Id":3,
    "Name":"House of Duras",
    "Type":"Villa",
    "Price": 200000
  },
  {
    "Id":4,
    "Name":"House of Konjah",
    "Type":"Duplex",
    "Price": 250000
  },
  {
    "Id":5,
    "Name":"House of Kor",
    "Type":"Penthouse",
    "Price": 180000
  },
  {
    "Id":6,
    "Name":"House of Korath",
    "Type":"Flat",
    "Price": 120000
  },
  {
    "Id":7,
    "Name":"House of K'toh-maag",
    "Type":"Duplex",
    "Price": 240000
  },
  {
    "Id":7,
    "Name":"House of Martok",
    "Type":"Complex",
    "Price": 248000
  },
  {
    "Id":7,
    "Name":"House of Mo'Kai",
    "Type":"Apartment Complex",
    "Price": 177000
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
