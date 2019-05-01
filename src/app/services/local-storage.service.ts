import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setlocalstorage(Token){
    localStorage.setItem('accessToken', Token)
console.log("webwala")
  }

}