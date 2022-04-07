import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redirect-test';

  public constructor(){
    //this.openInNewTab("https://www.w3schools.com");
  }

openInNewTab(url: any) {
  window.open(url);
  }
}

