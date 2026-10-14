export const THEME_STORAGE_KEY = "theme";

export const themeColors = {
  light: "#f3efe8",
  dark: "#050505",
} as const;

export type Theme = keyof typeof themeColors;

export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t!=="light"&&t!=="dark")t="dark";document.documentElement.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"${themeColors.light}":"${themeColors.dark}");}catch(e){}})();`;
