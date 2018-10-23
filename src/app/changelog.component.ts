import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import md from '../../CHANGELOG.md';

@Component({
  selector: 'app-changelog',
  template: `
    <div #changelog></div>
  `
})
export class ChangelogComponent implements AfterViewInit {
  title = 'importing-md-in-angular6';

  @ViewChild('changelog') changelog: ElementRef

  ngAfterViewInit() {
    this.changelog.nativeElement.innerHTML = md
  }
}
