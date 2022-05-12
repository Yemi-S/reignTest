import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reignTest';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "clock",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/iconmonstr-time.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "whiteHeart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/iconmonstr-not-favourite.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "redHeart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/iconmonstr-favourite.svg")
    );
  }
}
