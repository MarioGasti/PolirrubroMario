import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  txtCode: number;
  txtDescription: string;
  txtSellPrice: number;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    $('#txtCode')[0].value = '';
    $('#txtDescription')[0].value = '';
    $('#txtSellPrice')[0].value = '';
  }
}
