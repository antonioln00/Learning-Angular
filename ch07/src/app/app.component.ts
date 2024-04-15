import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ch07';

  constructor() {
    this.onComplete().then(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular';
  };

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise<void>(resolve => {
    setTimeout(() => {
    resolve();
    }, 2000);
    });
   };

}
