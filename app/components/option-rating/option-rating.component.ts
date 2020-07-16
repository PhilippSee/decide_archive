import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface PeriodicElement {
  criteria: string;
  weighting: number;
  evaluation: number;
  weightedAssessment: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {criteria: 'Power', weighting: 0.30, evaluation: 5, weightedAssessment: 1.5},
  {criteria: 'Verbrauch', weighting: 0.1, evaluation: 2, weightedAssessment:0.2},
  {criteria: 'Unterhalt', weighting: 0.1, evaluation: 5, weightedAssessment: 0.5},
  {criteria: 'Anschaffungspreis', weighting: 0.3, evaluation: 3, weightedAssessment: 0.9},
  {criteria: 'Stauraum', weighting: 0.1, evaluation: 5, weightedAssessment: 0.5},
  {criteria: 'Aussehen', weighting: 0.1, evaluation: 3, weightedAssessment: 0.3},
  {criteria: 'Sum', weighting: 1, evaluation: 0, weightedAssessment: 3.9}
];

@Component({
  selector: 'app-option-rating',
  templateUrl: './option-rating.component.html',
  styleUrls: ['./option-rating.component.css']
})


export class OptionRatingComponent implements OnInit {
  
  options = ["BMW i3", "BMW 520d Touring", "Audi A7"];
  // optionCriteriaRating:Array<any> = ["Power","Verbrauch","Unterhalt","Anschaffungspreis","Stauraum","Aussehen"];
  newOption = new FormControl('');

  displayedColumns: string[] = ['criteria', 'weighting', 'evaluation', 'weightedAssessment'];
  dataSource = ELEMENT_DATA;

  constructor() { 
  }


  addOption() {
    this.options.push(this.newOption.value);
    this.newOption.reset();
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }

  ngOnInit(): void {
  }

}