import { Component, OnInit } from '@angular/core';
import { GlobalDecideDataService } from '../../services/global-decide-data.service';
import { CriteriaArrayRefurbishmentService } from '../../services/criteria-array-refurbishment.service';

@Component({
  selector: 'app-criteria-prio',
  templateUrl: './criteria-prio.component.html',
  styleUrls: ['./criteria-prio.component.css']
})
export class CriteriaPrioComponent implements OnInit {

  //testArray:Array<any> = [];
  criteriaArray:Array<any> = [];
  //lenghtArrayForTable:Array<number> = []; // for html table with ngFor
  //transposedArrayForTable:Array<any> = [];
  //numberComparison:number;
  //numberCriteria:number;
  criteriaCompareA:string = "";
  criteriaCompareB:string = "";
  CountCompareCriteriaA:number = 0;
  CountCompareCriteriaB:number = 1;
  //neededTableColums:number = 0;
  tableColumsWidth:number = 0;
  scoreSum:number = 0;
  hideCompareCard:boolean = true;
  aktivateSkip:boolean = false;
  IndexCriteriaArrayXEdit:number = 0;
  IndexCriteriaArrayYEdit:number = 0;

  constructor(public _globalData: GlobalDecideDataService, private _transformArray: CriteriaArrayRefurbishmentService) {
    //this.testArray = ["Power","Consumption","Maintenance costs","Purchase price","Storage space","Looking"]; //_globalData.globalCriteria; //["Power","Verbrauch","Unterhalt","Anschaffungspreis","Stauraum","Aussehen"];
    this.criteriaArray = _globalData.globalCriteria; //_globalData.globalCriteria; //["Power","Verbrauch","Unterhalt","Anschaffungspreis","Stauraum","Aussehen"];
    //this.neededTableColums = this.testArray.length + 2;
    //this.tableColumsWidth = Math.floor(100 / this.neededTableColums)/100;
    this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
    this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
  }
  
  public calculateScore(){
    for (let y=1; y < this._transformArray.transposedArrayForTable.length; y++){
      for (let x=1; x < this._transformArray.transposedArrayForTable.length; x++) {
        this.scoreSum = this.scoreSum + Number(this._transformArray.transposedArrayForTable[y][x]);
      }
      this._transformArray.transposedArrayForTable[y][this._transformArray.transposedArrayForTable.length] = this.scoreSum;
      this.scoreSum = 0;
    };
  }

  public exportToCSV() {
    var CsvString = "";
    this._transformArray.transposedArrayForTable.forEach(function(RowItem, RowIndex) {
      RowItem.forEach(function(ColItem, ColIndex) {
        CsvString += ColItem + ',';
      });
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
   var x = document.createElement("A");
   x.setAttribute("href", CsvString );
   x.setAttribute("download","somedata.csv");
   document.body.appendChild(x);
   x.click();
  }

  public SelectedCriteriaA(){
    for(let i = 0; i < this._transformArray.transposedArrayForTable.length; i++){          // get the horizontal index of the array of the shown criteria 
      if(this._transformArray.transposedArrayForTable[i][0] == this.criteriaCompareA){
         this.IndexCriteriaArrayXEdit = i;
      }
    } 
    for(let i = 0; i < this._transformArray.transposedArrayForTable[0].length; i++){       // get the vertical index of the array of the shown criteria
      if(this._transformArray.transposedArrayForTable[0][i] == this.criteriaCompareB){
        this.IndexCriteriaArrayYEdit = i;
     } 
    }
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayXEdit][this.IndexCriteriaArrayYEdit] = 3;  //insert 3 as a value for the more important criteria
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayYEdit][this.IndexCriteriaArrayXEdit] = 1;  //transposed index to score the other way around

    if (this.CountCompareCriteriaB < this.criteriaArray.length -1 ) {
      this.CountCompareCriteriaB = this.CountCompareCriteriaB + 1;
      this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
    }
    else {
        if (this.CountCompareCriteriaA < this.criteriaArray.length -2 ){
          this.CountCompareCriteriaA = this.CountCompareCriteriaA + 1;
          this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
          this.CountCompareCriteriaB = this.CountCompareCriteriaA + 1;
          this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
        }
        else {
          this.hideCompareCard = false;
          this.criteriaCompareA = "";
          this.criteriaCompareB = "";
        }
    }
  }

  public SelectedCriteriaB(){
    for(let i = 0; i < this._transformArray.transposedArrayForTable.length; i++){          // get the horizontal index of the array of the shown criteria 
      if(this._transformArray.transposedArrayForTable[i][0] == this.criteriaCompareA){
         this.IndexCriteriaArrayXEdit = i;
      }
    } 
    for(let i = 0; i < this._transformArray.transposedArrayForTable[0].length; i++){       // get the vertical index of the array of the shown criteria
      if(this._transformArray.transposedArrayForTable[0][i] == this.criteriaCompareB){
        this.IndexCriteriaArrayYEdit = i;
     } 
    }
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayXEdit][this.IndexCriteriaArrayYEdit] = 1;  //insert 3 as a value for the more important criteria
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayYEdit][this.IndexCriteriaArrayXEdit] = 3;  //transposed index to score the other way around

    if (this.CountCompareCriteriaB < this.criteriaArray.length -1 ) {
      this.CountCompareCriteriaB = this.CountCompareCriteriaB + 1;
      this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
    }
    else {
        if (this.CountCompareCriteriaA < this.criteriaArray.length -2 ){
          this.CountCompareCriteriaA = this.CountCompareCriteriaA + 1;
          this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
          this.CountCompareCriteriaB = this.CountCompareCriteriaA + 1;
          this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
        }
        else {
          this.hideCompareCard = false;
          this.criteriaCompareA = "";
          this.criteriaCompareB = "";
        }
    }
  }

  public equallySelected(){
    for(let i = 0; i < this._transformArray.transposedArrayForTable.length; i++){          // get the horizontal index of the array of the shown criteria 
      if(this._transformArray.transposedArrayForTable[i][0] == this.criteriaCompareA){
         this.IndexCriteriaArrayXEdit = i;
      }
    } 
    for(let i = 0; i < this._transformArray.transposedArrayForTable[0].length; i++){       // get the vertical index of the array of the shown criteria
      if(this._transformArray.transposedArrayForTable[0][i] == this.criteriaCompareB){
        this.IndexCriteriaArrayYEdit = i;
     } 
    }
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayXEdit][this.IndexCriteriaArrayYEdit] = 2;  //insert 3 as a value for the more important criteria
    this._transformArray.transposedArrayForTable[this.IndexCriteriaArrayYEdit][this.IndexCriteriaArrayXEdit] = 2;  //transposed index to score the other way around
    if (this.CountCompareCriteriaB < this.criteriaArray.length -1 ) {
      this.CountCompareCriteriaB = this.CountCompareCriteriaB + 1;
      this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
    }
    else {
        if (this.CountCompareCriteriaA < this.criteriaArray.length -2 ){
          this.CountCompareCriteriaA = this.CountCompareCriteriaA + 1;
          this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
          this.CountCompareCriteriaB = this.CountCompareCriteriaA + 1;
          this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
        }
        else {
          this.hideCompareCard = false;
          this.criteriaCompareA = "";
          this.criteriaCompareB = "";
        }
    }
  }

  public SkipComparison(){
    if (this.CountCompareCriteriaB < this.criteriaArray.length -1 ) {
      this.CountCompareCriteriaB = this.CountCompareCriteriaB + 1;
      this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
    }
    else {
        if (this.CountCompareCriteriaA < this.criteriaArray.length -2 ){
          this.CountCompareCriteriaA = this.CountCompareCriteriaA + 1;
          this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
          this.CountCompareCriteriaB = this.CountCompareCriteriaA + 1;
          this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
        }
        else {
          this.hideCompareCard = false;
          this.criteriaCompareA = "";
          this.criteriaCompareB = "";
        }
    }
  }

  public restartCriteriaComparison(){
    this.scoreSum = 0;
    for (let i=1; i < this._transformArray.transposedArrayForTable.length; i++){
      this._transformArray.transposedArrayForTable[i][this._transformArray.transposedArrayForTable.length] = 0;
    }
    this.CountCompareCriteriaA = 0;
    this.CountCompareCriteriaB = 1;
    this.criteriaCompareA = this.criteriaArray[this.CountCompareCriteriaA].criteria;
    this.criteriaCompareB = this.criteriaArray[this.CountCompareCriteriaB].criteria;
    this.hideCompareCard = true;
    this.aktivateSkip = true;
  }

  public getTransposedArrayForTable(){
    return this._transformArray.transposedArrayForTable;
  }

  public getLenghtArrayForTable() {
    return this._transformArray.lenghtArrayForTable;
  }

  //public getTestArray(){
  //  return this.testArray;
  //}  
  
  public getCriteriaArray(){
    return this.criteriaArray;
  }

  ngOnInit(): void {

  }
}