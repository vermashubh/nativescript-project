import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setlocalstorage(Token){
    console.log(Token)
      require('nativescript-localstorage');
    localStorage.setItem('accessToken', Token);
console.log("mobilewala");
  }

}