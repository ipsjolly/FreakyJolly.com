// students.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpDataService } from 'src/app/services/http-data.service';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  @ViewChild('studentForm', { static: false })
  studentForm: NgForm;

  studentData: Student;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.studentData = {} as Student;
  }

  ngOnInit(): void {

    // Initializing Datatable pagination
    this.dataSource.paginator = this.paginator;

    // Fetch All Students on Page load
    this.getAllStudents()
  }

  getAllStudents() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element) {
    this.studentData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  deleteItem(id) {
    this.httpDataService.deleteItem(id).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      this.dataSource.data = this.dataSource.data.filter((o: Student) => {
        return o.id !== id ? o : false;
      })

      console.log(this.dataSource.data);

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()
    });
  }

  addStudent() {
    this.httpDataService.createItem(this.studentData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response })
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      })
    });
  }

  updateStudent() {
    this.httpDataService.updateItem(this.studentData.id, this.studentData).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      this.dataSource.data = this.dataSource.data.map((o: Student) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()

      this.cancelEdit()

    });
  }


  onSubmit() {
    if (this.studentForm.form.valid) {
      if (this.isEditMode)
        this.updateStudent()
      else
        this.addStudent();
    } else {
      console.log('Enter valid data!');
    }
  }
}
