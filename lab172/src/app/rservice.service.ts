import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts, SinglePost} from './interfaces/redpost';

@Injectable({
  providedIn: 'root'
})



export class RService {

  apiUrl = 'https://www.reddit.com';

  constructor(private http:HttpClient) { }


  getRPost(){
    return this.http.get<Posts>(`${this.apiUrl}/r/aww/.json`);
  }




  //--------------------------Methods---------------------//
  //get title
  //get image
  //get permalink


}
