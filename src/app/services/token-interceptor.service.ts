import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { ApiService } from './api.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector , private apiService:ApiService) { }
  
  intercept(req,next){
    if(!!sessionStorage.getItem('token')){
     let tokenized =  req.clone({
      setHeaders:{
        Authorization: "Bearer " + this.getToken()
      }
    })
    return next.handle(tokenized)    
    }
    return next.handle(req)
  }

  getToken(){
    let jwt1 = sessionStorage.getItem('token');
    let jwtData11 = jwt1.split('.')[1]
    console.log("lol   " +jwtData11)
     return jwtData11
  }
}
