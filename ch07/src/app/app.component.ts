import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';

  constructor() {
    const complete$ = from(this.onComplete());
    complete$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
    console.log(this.title);
  };

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise<void>((resolve) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }
}
