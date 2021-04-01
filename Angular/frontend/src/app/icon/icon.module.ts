import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IconModule {
  private path = '../../assets/images';
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {
    this.matIconRegistry
    .addSvgIcon('checklist', this.setPath(`${this.path}/checklist.svg`));
  } private setPath(url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  }
