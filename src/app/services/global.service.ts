import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public urlPath = "http://localhost:4000/"
public loginFlag=false
  constructor(private http:HttpClient,private router :Router) {

  }
  public navbarFlag = false
  public userInfo:any={}
isAdmin:boolean=false
getAllCars():Observable<any>{
  return this.http.get(`${this.urlPath}Car/all`)
}
      Login(obj:any):Observable<any>{
        return this.http.post(`${this.urlPath}user/login`,obj)
      }
      authMe():Observable<any>{
        return this.http.get(`${this.urlPath}user/profile`)
        }
      Logout():Observable<any>{
            return this.http.get(`${this.urlPath}user/logout`)
      }
      allUsers():Observable<any>{
        return this.http.get(`${this.urlPath}user/all`)
      }
      getAllCategories():Observable<any>{
        return this.http.get(`${this.urlPath}Brand/show`)
      }
      makeOrder(obj:any,id:any):Observable<any>{
      return this.http.post(`${this.urlPath}user/order/${id}`,obj)
      }
      register(obj:any): Observable <any>{
        return this.http.post(`${this.urlPath}user/register`,obj)
      }
      SingleCar(id:any):Observable<any>{
return this.http.get(`${this.urlPath}Car/showcar/${id}`)
      }
      GetallCountries():Observable<any>{
        return this.http.get(`${this.urlPath}user/countries`)
      }
      GetallCities():Observable<any>{
        return this.http.get(`${this.urlPath}user/allCities`)
      }
      search(obj:any):Observable<any>{
        return this.http.post(`${this.urlPath}Car/search/`,obj)
      }
GetUser(id:any):Observable<any>{
  return this.http.get(`${this.urlPath}user/all/${id}`)
}
order(id:any,obj:any):Observable<any>{
  return this.http.post(`${this.urlPath}user/order/${id}`,obj)
}
editPass(obj:any):Observable<any>{
  return this.http.patch(`${this.urlPath}user/editPass`,obj)
}
    }
