import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Child } from '../app.interfaces'
import { AppService } from '../app.service'

@Component({
  selector: 'item',
  moduleId: module.id,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  private appsFromCategory : Child[];
  
  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {

    console.log('Item Component ' + this.route.snapshot.params['category_name']);
    this.getCategoryApps(this.route.snapshot.params['category_name']);
    console.log(this.appsFromCategory.length);

  }


  private getCategoryApps(category_name){

    this.appService.getData().subscribe(data => {
      data.data.children.forEach( child => {

        if(child.data.advertiser_category == category_name){
          this.appsFromCategory.push(child);
        }

      });


   });

  }

}