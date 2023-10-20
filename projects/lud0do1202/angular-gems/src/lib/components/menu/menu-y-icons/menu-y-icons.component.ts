import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuYIconsConfig } from './menu-y-icons-config';

/**
 * @help https://www.google.com
 * @author Lud0do1202
 * @date 17 October 2023
 */
@Component({
  selector: 'gems-menu-y-icons',
  templateUrl: './menu-y-icons.component.html',
  styleUrls: ['./menu-y-icons.component.scss'],
})
export class MenuYIconsComponent implements OnInit {
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
  private static _default: MenuYIconsConfig = {
    icons: [],
    defaultActiveLink: 0,
    styleId: undefined,
  };
  /**
   * The configuration for the menu-x component
   */
  @Input() config!: MenuYIconsConfig;

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
  protected heightLink!: string;

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Config
    this.config = { ...MenuYIconsComponent._default, ...this.config };

    // Default active link
    this.activeLink = this.config.defaultActiveLink;

    // Height link
    this.heightLink = `calc(100% / ${this.config.icons.length})`;

    // Translate electron link
    this.translateElectronLink = `translateY(${this.activeLink * 100}%)`;
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
    this.translateElectronLink = `translateY(${this.activeLink * 100}%)`;
  }
}
