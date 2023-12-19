import { muiTheme } from './schemes/muiTheme';

export function themeCreator(theme) {
  return themeMap[theme];
}

const themeMap = {
  muiTheme
};
