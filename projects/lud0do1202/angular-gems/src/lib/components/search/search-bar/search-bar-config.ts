/**
 * @help https://angular-gems.web.app/components/search/search-bar
 * @author Lud0do1202
 * @date 20 October 2023
 */
export interface SearchBarConfig {
  /**
   * The items that will be filtered
   */
  items: any[];

  /**
   * The function that filters
   * @param search Will be the value of the input of the search bar
   * @param items Will be the items to filter
   * @returns The items filtered
   */
  filter: (search: string, items: any[]) => any[];

  /**
   * The icon that will be place in <i class="...."></i>
   * @undefined No icon is shown
   */
  icon?: string;

  /**
   * The icon is placed on the left or on the right
   */
  iconPosition?: 'left' | 'right';

  /**
   * The placeholder of the input
   */
  placeholder?: string;

  /**
   * If the filter function emit every time the value change (onModelChange) or when the value has been changed (onChange)
   */
  dynamicFilter?: boolean;

  /**
   * The id css for the component
   * @info It can be used several times
   */
  styleId?: string;
}
