import { Component, OnInit } from '@angular/core';
import { Istudent } from '../Istudent';
import { studentsData } from 'src/models/model';
import { StudentService } from '../student.service';
import { StudentslistComponent } from '../studentslist/studentslist.component';

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.css'],
})
export class CommonComponentComponent implements OnInit {
  students: Istudent[] = [];
  constructor(private studentService: StudentService) {}
  async ngOnInit() {
    this.students = await this.studentService.getStudentData();
  }
}
