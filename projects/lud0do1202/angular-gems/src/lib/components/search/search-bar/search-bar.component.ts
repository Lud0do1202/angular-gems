import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchBarConfig } from './search-bar-config';

/**
 * @help https://angular-gems.web.app/components/search/search-bar
 * @author Lud0do1202
 * @date 20 October 2023
 */
@Component({
  selector: 'gems-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  /* -------------------------------- Output -------------------------------- */
  /**
   * The event emited every time the function filter is called (dynamicFilter)
   * @returns the items filtered
   */
  @Output() filtered = new EventEmitter();

  /* ----------------------------- Configuration ---------------------------- */
  /**
   * The default configuration
   */
  private static _default: SearchBarConfig = {
    items: [],
    filter: (search: string, items: any[]) =>
      items.filter((item) => item.includes(search)),
    icon: undefined,
    iconPosition: 'left',
    placeholder: 'Search',
    dynamicFilter: true,
    styleId: undefined,
  };
  /**
   * The configuration for the search-bar component
   */
  @Input() config!: SearchBarConfig;

  /* --------------------------------- Form --------------------------------- */
  /**
   * The value of the input search bar
   */
  value: string = '';

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.config = { ...SearchBarComponent._default, ...this.config };
  }

  /* ---------------------------- On Change Emit ---------------------------- */
  /**
   * Function that emit when it filter the items
   * @param dynamicFilter If the event use onModelChange or onChange
   */
  onChangeEmit(dynamicFilter: boolean): void {
    if (
      (this.config.dynamicFilter && dynamicFilter) || // Want dynamic filter and has it (onModelChange)
      (!this.config.dynamicFilter && !dynamicFilter) // Doens't want dynamic filter and doesn't have it (onChange)
    )
      this.filtered.emit(this.config.filter(this.value, this.config.items));
  }
}
