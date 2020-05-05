import { Component, OnInit, Input } from '@angular/core';
import { SinglePost} from '../interfaces/redpost';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() myPost:SinglePost;

  constructor() { }

  ngOnInit(): void {
  }

}
