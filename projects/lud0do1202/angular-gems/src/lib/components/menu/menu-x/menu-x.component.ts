import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gems-menu-x',
  templateUrl: './menu-x.component.html',
  styleUrls: ['./menu-x.component.scss'],
})
export class MenuXComponent implements OnInit {
  // Event link clicked
  @Output() onLinkClicked = new EventEmitter<number>();

  // Links
  @Input() links: string[] = [];

  // Active link
  @Input() default: number = 0;
  activeLink!: number;

  // Style id
  @Input() styleId: string = '';

  // Dynamic style
  translateElectronLink!: string;
  widthLink!: string;

  /******************************************************************************/
  ngOnInit(): void {
    // Default active link
    this.activeLink = this.default;

    // Width
    this.widthLink = `calc(100% / ${this.links.length})`;

    // TranslateY electron link
    this.translateElectronLink = `translateX(${this.activeLink! * 100}%)`;
  }

  /******************************************************************************/
  click(index: number): void {
    // Emit
    this.onLinkClicked.emit(index);

    // Active link
    this.activeLink = index;

    // Translate electron link
    this.translateElectronLink = `translateX(${this.activeLink! * 100}%)`;
  }
}
