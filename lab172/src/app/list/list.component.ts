import { Component, OnInit } from '@angular/core';
import { RService } from '../rservice.service';
import { Posts } from '../interfaces/redpost';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rService: RService) { }

  posts:Posts;

  ngOnInit(): void {
    this.rService.getRPost().subscribe(
      (data:Posts) => this.posts = {...data},
      error => console.error(error)
    );
  }

}
