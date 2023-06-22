export interface MenuXConfig {
  links: {
    label: string;
    style?: {
      activeFontColor?: string;
      activeBgColor?: string;
    };
  }[];
  activeLink?: number;
  style?: {
    fontSize?: string;
    fontColor?: string;
    bgColor?: string;
    activeFontColor?: string;
    activeBgColor?: string;
    border?: string;
    borderRadius?: string;
    paddingY?: string;
    transition?: string;
  };
}
