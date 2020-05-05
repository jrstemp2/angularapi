import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts, Data1, Children, SinglePost} from './interfaces/redpost';

@Injectable({
  providedIn: 'root'
})



export class RService {

  apiUrl = 'https://www.reddit.com/r/aww/.json';

  constructor(private http:HttpClient) { }


  getRPost(){
    return this.http.get<Posts>(this.apiUrl);
  }




  //--------------------------Methods---------------------//
  //get title
  //get image
  //get permalink


}
