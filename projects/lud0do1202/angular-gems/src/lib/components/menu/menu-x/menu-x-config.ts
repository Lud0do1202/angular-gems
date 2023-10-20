/**
 * @help https://angular-gems.web.app/components/menu/menu-x
 * @author Lud0do1202
 * @date 20 October 2023
 */
export interface MenuXConfig {
  /**
   * The labels of the links
   */
  links: string[];

  /**
   * The default link which is active
   */
  defaultActiveLink: number;

  /**
   * The id css for the component
   * @info It can be used several times
   */
  styleId?: string;
}
