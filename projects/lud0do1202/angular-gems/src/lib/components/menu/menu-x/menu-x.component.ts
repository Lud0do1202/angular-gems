import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuXConfig } from './menu-x-config';

/**
 * @help https://www.google.com
 * @author Lud0do1202
 * @date 17 October 2023
 */
@Component({
  selector: 'gems-menu-x',
  templateUrl: './menu-x.component.html',
  styleUrls: ['./menu-x.component.scss'],
})
export class MenuXComponent implements OnInit {
  /* -------------------------------- Output -------------------------------- */
  /**
   * The event emited when a link is clicked
   * @returns the index of link clicked
   */
  @Output() onLinkClicked = new EventEmitter<number>();

  /* ----------------------------- Configuration ---------------------------- */
  /**
   * The default configuration
   */
  private static _default: MenuXConfig = {
    links: [],
    defaultActiveLink: 0,
    styleId: undefined,
  };
  /**
   * The configuration for the menu-x component
   */
  @Input() config!: MenuXConfig;

  /* ------------------------------ Navigation ------------------------------ */
  /**
   * The active link
   */
  protected activeLink!: number;

  /* ----------------------------- Dynamic Style ---------------------------- */
  /**
   * The value of transform : translateX(...%)
   */
  protected translateElectronLink!: string;
  /**
   * The width of a link
   */
  protected widthLink!: string;

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Config
    this.config = { ...MenuXComponent._default, ...this.config };

    // Default active link
    this.activeLink = this.config.defaultActiveLink;

    // Width link
    this.widthLink = `calc(100% / ${this.config.links.length})`;

    // Translate electron link
    this.translateElectronLink = `translateX(${this.activeLink * 100}%)`;
  }

  /* --------------------------------- Click -------------------------------- */
  /**
   * Event emit when a new link is clicked
   * @param index The index of the link clicked
   */
  click(index: number): void {
    // Stop if same link clicked
    if (index === this.activeLink) return;

    // Emit
    this.onLinkClicked.emit(index);

    // Active link
    this.activeLink = index;

    // Translate electron link
    this.translateElectronLink = `translateX(${this.activeLink * 100}%)`;
  }
}
