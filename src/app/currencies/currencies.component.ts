import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { currencyInfo } from '../Module.ts/currencyInfo';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies : currencyInfo[]=[];

  constructor (public apiCaller : HttpClient) 
  {
    

  }
  ngOnInit(): void {
    this.apiCaller.get('https://api.fastforex.io/fetch-all?')
                  .subscribe((data:any)=>
                  {
                    for (let key in data.results) {
                      let c = new currencyInfo();
                      c.symbol = key;
                      c.rate = data.results[key];
                      this.currencies.push(c);}
                    });
                  }
  }
  


