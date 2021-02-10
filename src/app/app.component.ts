// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   @ViewChild("agGrid", {static: false})agGrid: AgGridAngular;

//   constructor(private http: HttpClient){}

//   columnDefs = [
//       {headerName : "Make" , field: "make" , sortable: true, filter: true, checkboxSelection: true},
//       {headerName : "Model", field: "model", sortable: true, filter: true, checkboxSelection: true},
//       {headerName : "price", field: "price", sortable: true, filter: true, checkboxSelection: true},
//   ];
//   // rowData = [
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},
//   //   {make: "Ferrari", model: "Enzo", price: 3500000},
//   //   {make: "Lamborghini", model: "Urus", price: 31000000},
//   //   {make: "Porche", model: "Boxter", price: 8945000},

//   // ];
//   rowData : any;


//   ngOnInit(){
//     this.rowData = this.http.get("");
//   }

//   getSelectedRows(){
//     const selectedNodes = this.agGrid.api.getSelectedNodes();
//     const selectedData = selectedNodes.map(node => node.data);
//     const selectedDataStringPresentation = selectedData.map(node => node.make+' '+node.model).join(",");
//     // alert('selected node: ${selectedDataStringPresentation}');
//     console.log(selectedDataStringPresentation);

//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('agGrid',{static: false}) agGrid: AgGridAngular;
  @ViewChild('agGrid',{static: false}) 'agGrid': AgGridAngular;

  title = 'my-app';

  defaultColDef = {
      sortable: true,
      filter: true
  };

  columnDefs = [
      { field: 'make', rowGroup: true },
      { field: 'price' }
  ];

  autoGroupColumnDef = {
      headerName: 'Model',
      field: 'model',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
          checkbox: true
      }
  };

  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.rowData = this.http.get('https://www.ag-grid.com/example-assets/row-data.json');
  }

  getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => {
        if (node.groupData) {
          return { make: node.key, model: 'Group' };
        }
        return node.data;
      });
      const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
