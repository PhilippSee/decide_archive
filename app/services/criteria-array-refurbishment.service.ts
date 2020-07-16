import { Injectable } from '@angular/core';
import { GlobalDecideDataService } from '../services/global-decide-data.service';

@Injectable({
  providedIn: 'root'
})
export class CriteriaArrayRefurbishmentService {

  testArray:Array<any> = [];
  neededTableColums:number = 0;
  lenghtArrayForTable:Array<number> = [];
  transposedArrayForTable:Array<any> = [];


  constructor(public _globalData: GlobalDecideDataService) { 
    this.testArray = _globalData.globalCriteria; // ["Power","Consumption","Maintenance costs","Purchase price","Storage space","Looking"]; //_globalData.globalCriteria;
    this.neededTableColums = this.testArray.length + 2;
  }

  public getTestArray(){
    return this.testArray;
  }  

  public getLenghtArrayForTable(){
    return this.lenghtArrayForTable;
  }  

  public getTransposedArrayForTable(){
    return this.transposedArrayForTable;
  }

  public arrayRefurbishment() {
    // Clear variables:
    this.testArray = ["Power","Consumption","Maintenance costs","Purchase price","Storage space","Looking"];
    this.transposedArrayForTable = [];
    //console.log(this.transposedArrayForTable);
    //console.log(this.testArray);
    //console.log(this._globalData.globalCriteria)

    // Array Manipulation:
    this.testArray.unshift(this.testArray[0]); //add a first column with a copy of first entry

    // transform the array into a 2D array with additional rows and culomns
    for (let c = 0; c < this.testArray.length; c++) {
      this.testArray[c] = [new Array(1).fill(this.testArray[c])]; // insert a new array into a field of the existing array
      for (let v = 0; v < this.testArray.length -1; v++) { // increse the check number to add a column (/a row after transpose)
        this.testArray[c].push(this.testArray[c][0]); // copy the value of the original array into the sub-array to create the n x n matrix
      }
    };
    
    // transpose array:
    for (let i = 0; i < this.testArray.length; i++) {
        for (let j = 0; j < this.testArray[i].length; j++) {
            if (this.testArray[i][j] === undefined) continue; // skip undefined values to preserve sparse array
            if (this.transposedArrayForTable[j] === undefined) this.transposedArrayForTable[j] = []; // create row if it doesn't exist yet
            if (i === j)
              {
                this.transposedArrayForTable[j][i] = 0; // insert X where row equals column 
              }
            else 
              { 
                this.transposedArrayForTable[j][i] = this.testArray[i][j] // swap the x and y coords for the copy
              }; 
        }
    };

    // matrix ajustments
    for (let i = 0; i < this.transposedArrayForTable.length; i++) {
      this.transposedArrayForTable[i][0] = this.transposedArrayForTable[0][i];
    };

    // insert a "0" to all fields that should not be modified
    for (let i = 0; i < this.transposedArrayForTable.length; i++) {
      for (let j = 1; j < this.transposedArrayForTable[i].length; j++) {
        if (i > j) this.transposedArrayForTable[i][j] = 0;
      }
    };

    // insert "to compare" to all fields that must be manipulated
    for (let i = 1; i < this.transposedArrayForTable.length; i++) {
      for (let j = 0; j < this.transposedArrayForTable[i].length; j++) {
        if (i < j) this.transposedArrayForTable[i][j] = "to compare";
      }
    };
    
    this.transposedArrayForTable[0][this.transposedArrayForTable.length] = ["Score"]; // add a new column for the score of the criteria
    this.transposedArrayForTable[0][0] = "";

  for (let i = 0; i < this.neededTableColums; i++) {
    this.lenghtArrayForTable.push(i);
  };

  //console.log("Transposed");
  //console.log(this.transposedArrayForTable);
  //console.log("Test Array after function");
  //console.log(this.testArray);
  //console.log("Global Criteria after function");
  //console.log(this._globalData.globalCriteria)
  }

}