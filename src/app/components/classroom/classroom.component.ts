import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStoreService, Teacher } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(private dataStore: DataStoreService) { }

  teachers$!: Observable<Teacher[]>;
  students$!: Observable<string[]>;

  ngOnInit(): void {
    this.teachers$ = this.dataStore.teachers$;
    this.students$ = this.dataStore.students$;
  }

  addStudent(student: string) {
    this.dataStore.addStudent(student);
  }

}
