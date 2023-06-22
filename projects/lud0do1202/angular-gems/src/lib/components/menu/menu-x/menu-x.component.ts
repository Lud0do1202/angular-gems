import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuXConfig } from '../../../api/menu-x-config';

@Component({
  selector: 'gems-menu-x',
  templateUrl: './menu-x.component.html',
  styleUrls: ['./menu-x.component.scss'],
})
export class MenuXComponent implements OnInit {
  // Event link clicked
  @Output() linkClicked = new EventEmitter<number>();

  // Config
  @Input() config!: MenuXConfig;
  private saveDefault!: {
    activeFontColor: string;
    activeBgColor: string;
  };

  // Default config
  private DEFAULT_CONFIG: MenuXConfig = {
    links: [{ label: 'link-1' }, { label: 'link-2' }, { label: 'link-3' }],
    activeLink: 0,
    style: {
      fontSize: '2em',
      fontColor: '#3b82f6',
      bgColor: '#ddd',
      activeFontColor: '#fff',
      activeBgColor: '#3b82f6',
      border: '2px solid #c8c8c8',
      borderRadius: '30px',
      paddingY: '10px',
      transition: '0.5s',
    },
  };

  // Dynamic style
  translateYElectron!: string;
  width!: string;

  /******************************************************************************/
  ngOnInit(): void {
    // ERROR
    this.config = this.config ?? this.DEFAULT_CONFIG;

    // Style
    this.config = {
      ...this.DEFAULT_CONFIG,
      ...this.config,
      style: {
        ...this.DEFAULT_CONFIG.style,
        ...this.config.style,
      },
    };

    // Save default
    this.saveDefault = {
      activeFontColor: this.config.style!.activeFontColor!,
      activeBgColor: this.config.style!.activeBgColor!,
    };

    // Width
    this.width = `calc(100% / ${this.config.links.length})`;

    // TranslateY electron link
    this.translateYElectron = `translateX(${this.config.activeLink! * 100}%)`;

    // Color electron link
    this.updateColorElectronLink(this.config.activeLink!);
  }

  /******************************************************************************/
  click(index: number): void {
    // Emit
    this.linkClicked.emit(index);

    // Active link
    this.config.activeLink = index;

    // Translate electron link
    this.translateYElectron = `translateX(${this.config.activeLink * 100}%)`;

    // Update color electron link
    this.updateColorElectronLink(index);
  }

  /******************************************************************************/
  updateColorElectronLink(index: number): void {
    this.config.style!.activeFontColor =
      this.config.links[index].style?.activeFontColor || this.saveDefault.activeFontColor;
    this.config.style!.activeBgColor = this.config.links[index].style?.activeBgColor || this.saveDefault.activeBgColor;
  }
}
