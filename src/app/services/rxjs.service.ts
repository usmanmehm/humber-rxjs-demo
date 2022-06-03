import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private _myData: BehaviorSubject<any> = new BehaviorSubject(null);
  myData$: Observable<any> = this._myData.asObservable();

  private _activeCartItem: BehaviorSubject<string | any> = new BehaviorSubject(null);
  activeCartItem$: Observable<string> = this._activeCartItem.asObservable();

  private _cartItems: BehaviorSubject<CartItem[] | any> = new BehaviorSubject(null);
  cartItems$: Observable<CartItem[]> = this._cartItems.asObservable();


  usdConversionRates$: Observable<string> = new Observable();
  maxOrderLimit$: Observable<string> = new Observable();


  constructor(private http: HttpClient) {
    this._myData.subscribe(data => {
      console.log(data);
    })

    this._myData.next("i am passing some random data");

    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this._myData.next(time)
    }, 1000)


  }

  passData(data: any) {
    if (typeof data === "string") {
      this._myData.next(data);
    }
  }

  getCartItemData(name: string) {
    return this.maxOrderLimit$;
  }

  getAddress(address: string) {
    return of(address);
  }

}

interface CartItem {
  name: string;
}
