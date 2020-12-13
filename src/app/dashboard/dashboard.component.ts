import { Component, OnInit } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State, CompositeFilterDescriptor, distinct } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
// declare var $: any;
import * as $ from 'jquery';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardDataObj = [
    {
      "schoolName": "school1",
      "board": "board1",
      "medium": "medium1",
      "class": "class1",
      "id": 1
    },
    {
      "schoolName": "school2",
      "board": "board2",
      "medium": "medium2",
      "class": "class2",
      "id": 2
    },
    {
      "schoolName": "school3",
      "board": "board3",
      "medium": "medium3",
      "class": "class3",
      "id": 3
    },

  ]

  public aggregates: any[] = [];
  public state: State = {
    skip: 0,
    take: 10,
    group: [],
    filter: {
      logic: 'and',
      filters: [{ field: 'Title', operator: 'contains', value: '' }]
    }
  };

  public gridView: any = [];
  resultGridaData: any = [];
  public filter: CompositeFilterDescriptor;
  public showModalFlag: boolean = false;
  public dashBoard = {
    schoolName: null,
    board: null,
    medium: null,
    class: null,
    id: null
  }
  public showSave: boolean = true;
  public isView: boolean = true;
  public readOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.resultGridaData = this.dashboardDataObj;
    this.bindDataToGrid();
  }
  public showAction() {

  }
  private bindDataToGrid() {
    this.gridView = process(this.resultGridaData, { group: this.state.group, filter: this.state.filter, take: this.state.take, sort: this.state.sort, skip: this.state.skip });
    this.allData = this.allData.bind(this);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    if (state && state.group) {
      state.group.map(group => group.aggregates = this.aggregates);
    }
    this.state = state;

    this.bindDataToGrid();
  }

  public allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(this.resultGridaData, { group: this.state.group }).data,
    };

    return result;
  }
  public toggleIssueModal(id, type) {
    this.showModal();
    if (id > 0) {
      let temp;
      let tempArr;
      temp = [...this.dashboardDataObj];
      tempArr = temp.filter(element => {
        if (element.id == id) {
          return element
        }
      });
      console.log(tempArr);
      this.dashBoard.schoolName = tempArr[0].schoolName
      this.dashBoard.board = tempArr[0].board
      this.dashBoard.medium = tempArr[0].medium
      this.dashBoard.class = tempArr[0].class
      this.dashBoard.id = tempArr[0].id
    }
    if (type == 'Edit') {
      this.showSave = false;
      this.isView = true;
      this.readOnly = false;
    } else if (type == 'New') {
      this.showSave = true;
      this.isView = true;
      this.readOnly = false;
      this.dashBoard.schoolName = "";
      this.dashBoard.board = "";
      this.dashBoard.medium = "";
      this.dashBoard.class = "";
      this.dashBoard.id = "";
    } else if (type == 'View') {
      this.isView = false;
      this.readOnly = true;
    }
  }
  showModal(): void {
    this.showModalFlag = true;
  }
  hideModal(): void {
    this.showModalFlag = false;
  }
  validate() {
    if (this.dashBoard.schoolName != "" && this.dashBoard.board != "" && this.dashBoard.medium != "" && this.dashBoard.class != "") {
      return true;
    } else {
      return false;
    }
  }
  saveData() {
    let isValid = this.validate();
    if (isValid == true) {
      let tempArr = [];
      let lastID = 0;
      this.dashboardDataObj.forEach((item) => {
        tempArr.push(item.id);
      })
      const max = Math.max(...tempArr);
      lastID = max;
      this.dashBoard.id = lastID + 1;
      this.dashboardDataObj.push(this.dashBoard);
      this.resultGridaData = this.dashboardDataObj;
      this.bindDataToGrid();
      this.hideModal();
    } else {
      Swal.fire("Warning", "Please fill all Mandatory Fields", "warning")
    }
  }
  deleteItems(id) {
    this.dashboardDataObj.forEach((item) => {
      if (item.id === id) {
        this.dashboardDataObj.splice(item.id, 1)
      }
    });
    Swal.fire("Success", "Item deleted successfully", "success")
    this.resultGridaData = this.dashboardDataObj;
    this.bindDataToGrid();
  }

  updateData(id) {
    let isValid = this.validate();
    if (isValid == true) {
      console.log(id);
      this.dashboardDataObj.forEach((item) => {
        if (item.id == id) {
          item.schoolName = this.dashBoard.schoolName;
          item.class = this.dashBoard.class;
          item.medium = this.dashBoard.medium;
          item.board = this.dashBoard.board;
        }
      });
      this.resultGridaData = this.dashboardDataObj;
      this.bindDataToGrid();
      this.hideModal();
    } else {
      Swal.fire("Warning", "Please fill all Mandatory Fields", "warning");
    }
  }
}
