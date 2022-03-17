import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private receivedPageTitle = new BehaviorSubject<Object>({});
  sharedPageTitle = this.receivedPageTitle.asObservable();

  constructor() { }

  updatePageTitle(data:any) {
    this.receivedPageTitle.next(data)
  }
}
