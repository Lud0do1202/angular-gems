import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gems-menu-y-icons',
  templateUrl: './menu-y-icons.component.html',
  styleUrls: ['./menu-y-icons.component.scss'],
})
export class MenuYIconsComponent implements OnInit {
  // Event link clicked
  @Output() onLinkClicked = new EventEmitter<number>();

  // Links (icons)
  @Input() links: string[] = [];

  // Active link
  @Input() default: number = 0;
  activeLink!: number;

  // Style id
  @Input() styleId: string = '';

  // Dynamic style
  translateElectronLink!: string;
  heightLink!: string;

  /******************************************************************************/
  ngOnInit(): void {
    // Default active link
    this.activeLink = this.default;

    // Height link
    this.heightLink = `calc(100%/${this.links.length})`;

    // Translate electron link
    this.translateElectronLink = `translateY(${this.activeLink! * 100}%)`;
  }

  /******************************************************************************/
  click(index: number): void {
    // Emit
    this.onLinkClicked.emit(index);

    // Active link
    this.activeLink = index;

    // Translate electron link
    this.translateElectronLink = `translateY(${this.activeLink! * 100}%)`;
  }
}
