import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
title: string;
@Input() sidenav;
  constructor() {
   }
  ngOnInit() {
  }
}
