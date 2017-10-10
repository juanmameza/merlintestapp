import { Component, OnInit } from '@angular/core';

import { RootObject , Child } from '../app.interfaces';
import {AppService } from '../app.service'


@Component({
  selector: 'list',
  moduleId: module.id,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  results : Child[];

  selectedApp : Child;

  isLoading : boolean;

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {

    console.log("List init");
    this.isLoading = true;

    this.appService.getData()
    .subscribe(
      (result) => this.results = result.data.children,
      error => console.log("Error: " +  error),
      () => { this.isLoading = false
    }
    );

  }

  selectApp(app: Child) : void {
    this.selectedApp = app;
  }

}
