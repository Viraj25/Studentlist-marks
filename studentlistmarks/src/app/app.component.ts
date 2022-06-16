import { Component } from '@angular/core';
import { studentsData } from 'src/models/model';
import { Istudent } from './Istudent';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: Istudent[] = [];
  constructor(private studentService: StudentService) {}
  async ngOnInit() {
    this.students = await this.studentService.getStudentData();
  }
}
