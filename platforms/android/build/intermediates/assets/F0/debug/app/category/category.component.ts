import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Child } from '../app.interfaces'

import { AppService } from '../app.service';

@Component({
  selector: 'category',
  moduleId: module.id,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categories : string[];
  selectedCategory : string;
  appsFromCategory: Child[];

  categoryLoading : boolean;

  constructor(
    private appService: AppService,
    private router : Router
  ) { }

  ngOnInit() {

    this.categories = [];

    this.appService.getData().subscribe(data => {

      data.data.children.forEach( child => {

        // If category already exists, do not push.

        if(child.data.advertiser_category == null) child.data.advertiser_category = "Uncategorized";

        this.categories.indexOf(child.data.advertiser_category) === -1 ? this.categories.push(child.data.advertiser_category) : console.log("This item already exists");

      })

    },
    error => console.log("Error: " + error),
    () => console.log("completed category service")
  
  
  )

  }

  goToCategory(_category){
    console.log(_category);
    this.router.navigate([
      '/home/category', { outlets: { categoryoutlet: [_category] } }
    ])
  }

  showAppItemsOnSelection(category){
    
    this.selectedCategory = category;
    this.appsFromCategory = [];
    this. categoryLoading = true;

    this.appService.getData().subscribe(data => {
      data.data.children.forEach( child => {

        console.log(child);
        console.log(category);
        if(child.data.advertiser_category == category){
          if(child.data.advertiser_category == null) child.data.advertiser_category="Uncategorized";
          this.appsFromCategory.push(child);
        }

      });

      this.categoryLoading = false;

    })
  }


}
