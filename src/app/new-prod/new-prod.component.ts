import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

declare var $: any;

@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.component.html',
  styleUrls: ['./new-prod.component.css']
})
export class NewProdComponent implements OnInit {
  txtCode: number;
  txtDescription: string;
  txtQuantity: number;
  txtBuyPrice: number;
  txtSellPrice: number;
  txtProvider: string;

  object: {
    _id: number;
    code: number;
    description: string;
    quantity: number;
    buyprice: number;
    sellprice: number;
    provider: string;
  };

  constructor(private dbService: DbService) { }

  ngOnInit() {
    $('#txtCode').focus();
    const button = document.getElementsByClassName('button');
    $('.button').addClass('unclickable');
    $('input').change(e => {
      if (!this.txtCode || !this.txtSellPrice || !this.txtDescription) {
        $('.button').addClass('unclickable');
      } else {
        $('.button').removeClass('unclickable');
      }
    });

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', this.animateButton, false);
    }
  }

  animateButton = async e => {
    this.object = {
      _id: 0,
      code: 0,
      description: '',
      quantity: 0,
      buyprice: 0,
      sellprice: 0,
      provider: ''
    };
    this.object._id = $('#txtCode')[0].value;
    this.object.code = $('#txtCode')[0].value;
    this.object.description = $('#txtDescription')[0].value;
    this.object.quantity = $('#txtQuantity')[0].value;
    this.object.buyprice = $('#txtBuyPrice')[0].value;
    this.object.sellprice = $('#txtSellPrice')[0].value;
    this.object.provider = $('#txtProvider')[0].value;

    e.target.classList.remove('animate');
    e.target.classList.remove('disabled');
    e.target.classList.remove('success');
    e.target.classList.remove('error');
    e.target.classList.add('animate');
    e.target.classList.add('disabled');
    const result = await this.save();
    // e.preventDefault;
    // reset animation

    e.target.classList.add(result);

    setTimeout(_ => {
      e.target.classList.remove('animate');
      e.target.classList.remove('disabled');
    }, 6000);
  }

  save(): Promise<string> {
    console.log('Promise');
    return new Promise((resolve, reject) => {
      console.log(this.object);
      this.dbService.post('Products', { object: this.object }).subscribe(data => {
        console.log(data);
        console.log(data);
        resolve(data.result || data.error.result);
      });
    });
  }

  clear() {
    $('#txtCode')[0].value = '';
    $('#txtDescription')[0].value = '';
    $('#txtQuantity')[0].value = '';
    $('#txtBuyPrice')[0].value = '';
    $('#txtSellPrice')[0].value = '';
    $('#txtProvider')[0].value = '';
    $('#txtCode').focus();
  }
}
