import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private _teachers: BehaviorSubject<Teacher[] | any> = new BehaviorSubject(null);
  teachers$: Observable<Teacher[]> = this._teachers.asObservable();

  private _students: BehaviorSubject<string[] | any> = new BehaviorSubject(null);
  students$: Observable<string[]> = this._students.asObservable();



  private _products: BehaviorSubject<ProductData[] | any> = new BehaviorSubject(null);
  products$: Observable<ProductData[]> = this._products.asObservable();

  constructor(private http: HttpClient) {
    this._teachers.next(teachers);
    this._students.next(students);


    this.http.get('/assets/product-data.json').pipe(
      take(1)
    ).subscribe(data => {
      this._products.next(data);
    })
  }

  addStudent(student: string) {
    this.students$.pipe(
      take(1)
    ).subscribe(students => {
      console.log(students);
      students.push(student);
      this._students.next(students);
    })
  }
}

export interface ProductData {
  name: string;
  price: string;
  image: string;
}

export interface Teacher {
  name: string;
  subject: string;
}

const students = ["Maria", "Taylor", "David", "Johnny", "Sindhu", "Zohar"];
const teachers = [
    { name: "Brian", subject: "Arts"},
    { name: "Fatima", subject: "Math"},
    { name: "Cindy", subject: "Language"},
    { name: "Max", subject: "Geography"},
    { name: "Molly", subject: "Science"}
];

