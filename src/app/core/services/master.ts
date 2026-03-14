import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class Master {
  
  constructor(private http:HttpClient){}
  getAllCars(){
    debugger;
    this.http.get(environment.apiUrl + Constant.MODULE_NAME.CAR+Constant.API_METHODS.CAR_RENTAL.GET_ALL_CARS)
  }
}
