import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface CriteriaArrayDefinition {  // Definition of an array for the criteria
  criteria: string;
  weighting: number;
  evaluation: number;
  weightedAssessment: number;
}

export interface DecisionTemplateArrayDefinition {  // Definition of an array for each option with an criteria array for each option
  optionName: string;
  optionCriteria: Array<CriteriaArrayDefinition>;
  optionResult: number;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalDecideDataService {
  projectName: string;
  projectBackground: string;

  public globalCriteria: CriteriaArrayDefinition[] = [
    {criteria: 'Power', weighting: 0, evaluation: 0, weightedAssessment: 0},
    {criteria: 'Consumption', weighting: 0, evaluation: 0, weightedAssessment:0},
    {criteria: 'Maintenance costs', weighting: 0, evaluation: 0, weightedAssessment: 0},
    {criteria: 'Purchase price', weighting: 0, evaluation: 0, weightedAssessment: 0},
    {criteria: 'Storage space', weighting: 0, evaluation: 0, weightedAssessment: 0},
    {criteria: 'Looking', weighting: 0, evaluation: 0, weightedAssessment: 0}
  ];

  public globalOptions: DecisionTemplateArrayDefinition[] = [
    {optionName: 'BMW i3', optionCriteria: [{criteria: '', weighting: 0, evaluation: 0, weightedAssessment: 0}], optionResult: 0}
  ];

  numberCriteria:number = this.globalCriteria.length;
  numberComparison:number = this.globalCriteria.length * (this.globalCriteria.length - 1) / 2; // calculate the number of comparisons according to the number of criteria

  constructor() { }
}