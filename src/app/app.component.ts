import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap, take } from 'rxjs';
import { DataStoreService } from './services/data-store.service';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-demo';
  textEntered: Subject<any> = new Subject();

  price = 20;

  products$: Observable<any>

  constructor(private dataStore: DataStoreService) {
    this.products$ = this.dataStore.products$;
  }

  ngOnInit() {
    // this.rxjsService.myData$.subscribe(data => {
    //   console.log(data);
    // })

    // this.rxjsService.passData("i am passing this data through my component");

    

  }
}
