import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../Istudent';
import { StudentService } from '../student.service';
import { studentsData } from 'src/models/model';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css'],
})
export class StudentslistComponent implements OnInit {
  @Input() tableName = '';
  students: Istudent[] = [];
  constructor(private studentService: StudentService) {}
  async ngOnInit() {
    this.students = await this.studentService.getStudentData();
  }
}
