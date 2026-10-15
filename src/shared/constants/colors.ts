/**
 * Application Theme Colors and Palette Constants
 * Primary:
 * - Butter Ivory Canvas: #FDFFEB
 * - Powder Mist Blue: #D2DDEA
 * Secondary:
 * - Soft Pistachio Sage: #DEE6BD
 * - Deep Roasted Espresso: #4B2E1F
 * Accents:
 * - Warm Peach Blush: #F4B8A5
 */

export const THEME_COLORS = {
  primary: {
    canvas: '#FDFFEB',
    powderBlue: '#D2DDEA',
    powderBlueHover: '#C2CEE0',
  },
  secondary: {
    pistachio: '#DEE6BD',
    pistachioHover: '#D4DEA7',
    espresso: '#4B2E1F',
    espressoHover: '#3D2418',
  },
  accents: {
    peach: '#F4B8A5',
    peachHover: '#EAA996',
    peachBorder: '#DE9784',
  },
  background: {
    canvas: '#FDFFEB',
    surface: '#D2DDEA',
    pistachioLight: '#DEE6BD',
    peachLight: '#F4B8A5',
  },
  border: {
    subtle: '#B8C8DB',
    medium: '#DE9784',
    espresso: '#4B2E1F',
  },
  text: {
    heading: '#4B2E1F',
    body: '#4B2E1F',
    peach: '#F4B8A5',
    onDark: '#FDFFEB',
    onBlue: '#4B2E1F',
  },
} as const;

export const SOLID_BUTTONS = {
  primary: 'bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] border border-[#4B2E1F]',
  secondary: 'bg-[#F4B8A5] hover:bg-[#EAA996] text-[#4B2E1F] border border-[#DE9784]',
  espresso: 'bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB]',
  accent: 'bg-[#D2DDEA] hover:bg-[#C2CEE0] text-[#4B2E1F] border border-[#B8C8DB]',
} as const;

