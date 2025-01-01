import type { ThemeDefinition } from 'vuetify'

export const staticPrimaryColor = '#4d8cf5' // Biru khas GDGoC
export const staticPrimaryDarkenColor = '#1c1c3d' // Hitam khas GDGoC

export const themes: Record<string, ThemeDefinition> = {
  light: {
    dark: false,
    colors: {
      primary: staticPrimaryColor,
      'on-primary': '#fff',
      'primary-darken-1': staticPrimaryDarkenColor,
      secondary: '#34a853', // Hijau khas GDGoC
      'secondary-darken-1': '#2a7a3d', // Hijau gelap untuk kontras
      'on-secondary': '#fff',
      success: '#34a853',
      'success-darken-1': '#2a7a3d',
      'on-success': '#fff',
      info: '#4d8cf5', // Biru GDGoC
      'info-darken-1': '#3b6ec2', // Variasi lebih gelap
      'on-info': '#fff',
      warning: '#fbbc05', // Kuning GDGoC
      'warning-darken-1': '#d8a004', // Variasi lebih gelap
      'on-warning': '#fff',
      error: '#ea4335', // Merah GDGoC
      'error-darken-1': '#c22c25',
      'on-error': '#fff',
      background: '#f4f5fa',
      'on-background': '#1c1c3d',
      surface: '#fff',
      'on-surface': '#1c1c3d',
      'grey-50': '#FAFAFA',
      'grey-100': '#F5F5F5',
      'grey-200': '#EEEEEE',
      'grey-300': '#E0E0E0',
      'grey-400': '#BDBDBD',
      'grey-500': '#9E9E9E',
      'grey-600': '#757575',
      'grey-700': '#616161',
      'grey-800': '#424242',
      'grey-900': '#1c1c3d', // Hitam GDGoC
      'perfect-scrollbar-thumb': '#7c7c7c',
      'skin-bordered-background': '#fff',
      'skin-bordered-surface': '#fff',
      'expansion-panel-text-custom-bg': '#fafafa',
      'track-bg': '#F0F2F8',
      'chat-bg': '#F7F6FA',
    },
    variables: {
      'code-color': '#4d8cf5', // Tetap default atau sesuaikan jika ingin biru GDGoC
      'overlay-scrim-background': '#1c1c3d',
      'tooltip-background': '#1c1c3d',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'dragged-opacity': 0.1,
      'disabled-opacity': 0.4,
      'border-color': '#7c7c7c',
      'border-opacity': 0.12,
      'table-header-color': '#F6F7FB',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 Shadows
      'shadow-key-umbra-color': '#1c1c3d',
      'shadow-xs-opacity': '0.16',
      'shadow-sm-opacity': '0.18',
      'shadow-md-opacity': '0.20',
      'shadow-lg-opacity': '0.22',
      'shadow-xl-opacity': '0.24',
    },
  },

  dark: {
    dark: true,
    colors: {
      primary: staticPrimaryColor,
      'on-primary': '#fff',
      'primary-darken-1': staticPrimaryDarkenColor,
      secondary: '#34a853',
      'secondary-darken-1': '#2a7a3d',
      'on-secondary': '#fff',
      success: '#34a853',
      'success-darken-1': '#2a7a3d',
      'on-success': '#fff',
      info: '#4d8cf5',
      'info-darken-1': '#3b6ec2',
      'on-info': '#fff',
      warning: '#fbbc05',
      'warning-darken-1': '#d8a004',
      'on-warning': '#fff',
      error: '#ea4335',
      'error-darken-1': '#c22c25',
      'on-error': '#fff',
      background: '#322d42',
      'on-background': '#fff',
      surface: '#282435',
      'on-surface': '#fff',
      'grey-50': '#2A2E42',
      'grey-100': '#2F3349',
      'grey-200': '#4A5072',
      'grey-300': '#5E6692',
      'grey-400': '#7983BB',
      'grey-500': '#8692D0',
      'grey-600': '#AAB3DE',
      'grey-700': '#B6BEE3',
      'grey-800': '#CFD3EC',
      'grey-900': '#E7E9F6',
      'perfect-scrollbar-thumb': '#4a5072',
      'skin-bordered-background': '#312d4b',
      'skin-bordered-surface': '#312d4b',
      'expansion-panel-text-custom-bg': '#373350',
      'track-bg': '#474360',
      'chat-bg': '#373452',
    },

    variables: {
      'code-color': '#d400ff',
      'overlay-scrim-background': '#312D4B',
      'tooltip-background': '#F7F4FF',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'disabled-opacity': 0.4,
      'dragged-opacity': 0.1,
      'border-color': '#E7E3FC',
      'border-opacity': 0.12,
      'table-header-color': '#3D3759',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 Shadows
      'shadow-key-umbra-color': '#131120',
      'shadow-xs-opacity': '0.20',
      'shadow-sm-opacity': '0.22',
      'shadow-md-opacity': '0.24',
      'shadow-lg-opacity': '0.26',
      'shadow-xl-opacity': '0.28',
    },
  },
}

export default themes
