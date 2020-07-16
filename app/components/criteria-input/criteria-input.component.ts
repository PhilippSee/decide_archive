import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { GlobalDecideDataService } from '../../services/global-decide-data.service';
import { CriteriaArrayRefurbishmentService } from '../../services/criteria-array-refurbishment.service';

export interface Criteria_B {
  criteria: string;
  weighting: number;
  evaluation: number;
  weightedAssessment: number;
}

@Component({
  selector: 'app-criteria-input',
  templateUrl: './criteria-input.component.html',
  styleUrls: ['./criteria-input.component.css']
})
export class CriteriaInputComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our critera
    if ((value || '').trim()) {
      this._globalData.globalCriteria.push({criteria: value.trim(), weighting: 0, evaluation: 0, weightedAssessment: 0});
    }

    // Reset the input value after input
    if (input) {
      input.value = '';
    }
    console.log(this._globalData.globalCriteria);
  }

  // Versuch  Kriterien zu selektieren um sie für Folgeschritte auszuwählen (aktuell werden alle Kriterien weiter verwendet)
  select(criteria: Criteria_B): void {
    const index = this._globalData.globalCriteria.indexOf(criteria);
    console.log(index);
  }

  remove(criteria: Criteria_B): void {
    const index = this._globalData.globalCriteria.indexOf(criteria);

    if (index >= 0) {
      this._globalData.globalCriteria.splice(index, 1);
    }
  }

  public getCriteria(){
    return this._globalData.globalCriteria;
  }

  public getArrayRefurbishment() {
    return this._transformArray.arrayRefurbishment();
  }

  constructor(private _globalData: GlobalDecideDataService, private _transformArray: CriteriaArrayRefurbishmentService) { 
  }  

  ngOnInit(): void {
  }
}