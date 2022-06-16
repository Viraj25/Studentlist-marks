import { Injectable } from '@angular/core';
import { studentsData } from '../../src/models/model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  async getStudentData() {
    const studentList = await studentsData();
    return studentList;
  }
}
