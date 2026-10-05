import { Component } from '@angular/core';

type AttendanceStatus = 'Present' | 'Late' | 'Absent';

interface Student {
  id: number;
  name: string;
  grade: string;
  rollNumber: string;
  status: AttendanceStatus;
  guardian: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
    {
      id: 1,
      name: 'Madhu Sharma',
      grade: 'Grade 8-A',
      rollNumber: '08A-14',
      status: 'Present',
      guardian: 'Rao',
      phone: '999-999-9999',
      address: 'A-Block, 1st Street, Hyderabad'
    },
    {
      id: 2,
      name: 'Daniel Smith',
      grade: 'Grade 9-B',
      rollNumber: '09B-05',
      status: 'Late',
      guardian: 'Mrs. Smith',
      phone: '222-222-2222',
      address: '22 Pine Avenue, Brookside'
    },
    {
      id: 3,
      name: 'Meera Patel',
      grade: 'Grade 7-C',
      rollNumber: '07C-21',
      status: 'Present',
      guardian: 'Mr. Patel',
      phone: '333-333-3333',
      address: '9 River Road, Lakeside'
    },
    {
      id: 4,
      name: 'Nora James',
      grade: 'Grade 10-A',
      rollNumber: '10A-02',
      status: 'Absent',
      guardian: 'Mrs. James',
      phone: '444-444-4444',
      address: '30 Maple Lane, Greenfield'
    }
  ];

  searchTerm = '';
  statusFilter: 'All' | AttendanceStatus = 'All';
  currentPage = 1;
  pageSize = 3;
  editorMode: 'add' | 'edit' | null = null;
  editingStudentId: number | null = null;
  studentDraft: Student = this.emptyStudent();

  get filteredStudents(): Student[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.students.filter((student) => {
      const matchesQuery = !query || [student.name, student.grade, student.rollNumber]
        .some((value) => value.toLowerCase().includes(query));
      const matchesStatus = this.statusFilter === 'All' || student.status === this.statusFilter;
      return matchesQuery && matchesStatus;
    });
  }

  get pagedStudents(): Student[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredStudents.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredStudents.length / this.pageSize));
  }

  get firstVisibleIndex(): number {
    return this.filteredStudents.length ? (this.currentPage - 1) * this.pageSize + 1 : 0;
  }

  get lastVisibleIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredStudents.length);
  }

  countByStatus(status: AttendanceStatus): number {
    return this.students.filter((student) => student.status === status).length;
  }

  openAddForm(): void {
    this.studentDraft = this.emptyStudent();
    this.editingStudentId = null;
    this.editorMode = 'add';
  }

  openEditForm(student: Student): void {
    this.studentDraft = { ...student };
    this.editingStudentId = student.id;
    this.editorMode = 'edit';
  }

  saveStudent(): void {
    if (this.editorMode === 'edit' && this.editingStudentId !== null) {
      const index = this.students.findIndex((student) => student.id === this.editingStudentId);
      if (index !== -1) {
        this.students[index] = { ...this.studentDraft, id: this.editingStudentId };
      }
    } else {
      const nextId = Math.max(0, ...this.students.map((student) => student.id)) + 1;
      this.students = [...this.students, { ...this.studentDraft, id: nextId }];
    }
    this.closeForm();
    this.currentPage = 1;
  }

  deleteStudent(student: Student): void {
    if (!window.confirm(`Delete ${student.name} from the student list?`)) {
      return;
    }
    this.students = this.students.filter((item) => item.id !== student.id);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
  }

  closeForm(): void {
    this.editorMode = null;
    this.editingStudentId = null;
  }

  changeFilters(): void {
    this.currentPage = 1;
  }

  changePageSize(size: number): void {
    this.pageSize = Number(size);
    this.currentPage = 1;
  }

  statusClass(status: AttendanceStatus): string {
    return status.toLowerCase();
  }

  private emptyStudent(): Student {
    return {
      id: 0,
      name: '',
      grade: '',
      rollNumber: '',
      status: 'Present',
      guardian: '',
      phone: '',
      address: ''
    };
  }
}
