import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../app.interfaces'

@Component({
  selector: 'app-app-detail',
  moduleId: module.id,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{

  @Input() App : Child;

  constructor() { }

}
