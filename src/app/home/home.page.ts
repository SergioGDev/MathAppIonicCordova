import { Component, OnInit } from '@angular/core';
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  param1: string = '';
  param2: string = '';

  constructor() {}

  ngOnInit(): void {
      
  }

  testAdd(a: string, b: string) {
    let data = {
      param1: a,
      param2: b
    }

    cordova.plugins.MathCalculator.add(data).then( (result: any) => {
      console.log("Total is: " + result);
    })
    .catch( (error: any) => console.log("Error!!: ", error))
  }

  testSubstract(a: string, b: string) {
    let data = {
      param1: a,
      param2: b
    }

    cordova.plugins.MathCalculator.substract(data).then( (result: any) => {
      console.log("Total is: " + result);
    })
    .catch( (error: any) => console.log("Error!!: ", error))
  }

}
