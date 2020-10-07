import "styled-componets";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      background: string;
      paper: string;
      title: string;
      subtitle: string;
      error: string;
    };
  }
}
