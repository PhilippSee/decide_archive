import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-template',
  templateUrl: './decision-template.component.html',
  styleUrls: ['./decision-template.component.css']
})
export class DecisionTemplateComponent implements OnInit {
  options = ["BMW i3", "BMW 520d Touring", "Audi A7"];
  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
