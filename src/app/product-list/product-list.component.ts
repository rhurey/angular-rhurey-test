import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    var SpeechSDK: any = require('microsoft-cognitiveservices-speech-sdk');

    const config = SpeechSDK.SpeechConfig.fromSubscription("Sub", "westus2");
    const recognizer = new SpeechSDK.SpeechRecognizer(config);
    recognizer.recognizeOnceAsync((result:any)=>{
      console.info(result);
      window.alert("Result");

    });

    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/