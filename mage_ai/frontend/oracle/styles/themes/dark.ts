import {
  BLACK,
  BLUE,
  BLUE_DARK,
  BLUE_HIGHLIGHT,
  BLUE_LIGHT,
  BLUE_LINK,
  BLUE_TEXT,
  BLUE_TRANSPARENT,
  DARK_GRAY_LINES,
  DBT_ORANGE,
  DBT_ORANGE_TRANSPARENT,
  GRAY,
  GRAY_HIGHLIGHT,
  GREEN,
  GREY100,
  GREY200,
  GREY300,
  GREY400,
  GREY500,
  LIME_DARK,
  LIME_TEXT,
  NAVY,
  PEACH,
  PINK,
  PINK_LIGHT,
  PURPLE,
  PURPLE_DARK,
  PURPLE_DISABLED,
  PURPLE_HIGHLIGHT,
  PURPLE_LIGHT,
  PURPLE_TRANSPARENT,
  RED,
  RED_XLIGHT,
  SILVER,
  WHITE,
  YELLOW,
  YELLOW_TRANSPARENT,
} from '../colors/main';
import {
  DARK_CONTENT_ACTIVE,
  DARK_CONTENT_DEFAULT,
  DARK_CONTENT_DEFAULT_TRANSPARENT,
  DARK_CONTENT_DISABLED,
  DARK_CONTENT_INVERTED,
  DARK_CONTENT_MUTED,
} from '../colors/content';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  accent: {
    alert: '#F6540B',
    blue: BLUE_DARK,
    blueLight: BLUE_TRANSPARENT,
    contentDefaultTransparent: DARK_CONTENT_DEFAULT_TRANSPARENT,
    cyan: '#65E3FF',
    cyanTransparent: 'rgba(101, 227, 255, 0.12)',
    dbt: DBT_ORANGE,
    dbtLight: DBT_ORANGE_TRANSPARENT,
    info: '#00ABFF',
    infoTransparent: 'rgba(0, 171, 255, 0.5)',
    negative: '#FF1E59',
    negativeTransparent: 'rgba(255, 30, 89, 0.3)',
    pink: PINK,
    pinkLight: PINK_LIGHT,
    positive: '#00A81A',
    primaryTransparent: 'rgba(155, 108, 167, 0.5)',
    purple: PURPLE_DARK,
    purpleLight: PURPLE_TRANSPARENT,
    teal: '#00B4CC',
    tealLight: 'rgba(0, 180, 204, 0.5)',
    warning: '#DD9900',
    warningTransparent: 'rgba(221, 153, 0, 0.5)',
    yellow: YELLOW,
    yellowLight: YELLOW_TRANSPARENT,
  },
  background: {
    chartBlock: '#2E3036',
    codeArea: '#1E1F24',
    codeTextarea: '#000000',
    content: '#1B1C20',
    danger: RED_XLIGHT,
    dark: GRAY,
    header: '#1B1B1B',
    menu: NAVY,
    muted: SILVER,
    navigation: '#EDEDED',
    output: '#2E3036',
    page: '#1E1F24',
    panel: '#232429',
    popup: '#27292E',
    row: DARK_CONTENT_INVERTED,
    row2: GREY500,
    scrollbarThumb: 'rgba(100, 100, 100, 0.5)',
    scrollbarThumbHover: 'rgba(255, 255, 255, 0.3)',
    scrollbarTrack: '#2E3036', // defaultBackground
    success: LIME_DARK,
    table: '#292A2F',
  },
  borders: {
    button: '#454850',
    contrast: WHITE,
    danger: RED,
    dark: '#000000',
    info: YELLOW,
    light: '#2F3034',
    medium: '#1C1C1C',
    medium2: '#141414',
    success: GREEN,
  },
  brand: {
    earth100: '#C6EEDB',
    earth200: '#9DDFBF',
    earth300: '#6BBF96',
    earth400: '#37A46F',
    earth400Transparent: 'rgba(55, 164, 111, 0.4)',
    earth500: '#00954C',
    energy100: '#FFF4BA',
    energy200: '#FFED92',
    energy300: '#FFE662',
    energy400: '#FFDA19',
    energy400Transparent: 'rgba(255, 218, 25, 0.04)',
    energy500: '#F6C000',
    fire100: '#FFD7E0',
    fire200: '#FFA3B9',
    fire300: '#FF547D',
    fire400: '#FF144D',
    fire400Transparent: 'rgba(255, 20, 77, 0.4)',
    fire500: '#EB0032',
    stone100: '#F3E6D7',
    stone200: '#E3D4C2',
    stone400: '#BFA78B',
    stone500: '#AF8859',
    water100: '#BDCEFF',
    water200: '#81A1FF',
    water300: '#517DFF',
    water400: '#2A60FE',
    water400Transparent: 'rgba(42, 96, 254, 0.4)',
    water500: '#0F4CFF',
    wind100: '#EEEAFF',
    wind200: '#CCC1F4',
    wind300: '#A698DD',
    wind400: '#6B50D7',
    wind400SuperTransparent: 'rgba(107, 80, 215, 0.12)',
    wind400Transparent: 'rgba(107, 80, 215, 0.4)',
    wind500: '#4E32BC',
  },
  chart: {
    backgroundPrimary: PURPLE_DARK,
    backgroundSecondary: RED,
    backgroundTertiary: BLUE_HIGHLIGHT,
    button1: BLUE_DARK,
    button2: YELLOW,
    button3: LIME_DARK,
    button4: PINK,
    button5: PEACH,
    lines: '#9B6CA7',
    primary: PURPLE,
    secondary: RED,
    tertiary: BLUE,
  },
  content: {
    active: DARK_CONTENT_ACTIVE,
    default: DARK_CONTENT_DEFAULT,
    disabled: DARK_CONTENT_DISABLED,
    inverted: DARK_CONTENT_INVERTED,
    muted: DARK_CONTENT_MUTED,
  },
  elevation: {
    visualizationAccent: '#996CFF',
    visualizationAccentAlt: '#C1ACF7',
  },
  feature: {
    active: PURPLE_HIGHLIGHT,
    disabled: PURPLE_DISABLED,
  },
  icons: {
    neutral: '#787878',
  },
  interactive: {
    activeBorder: BLACK,
    checked: BLACK,
    dangerBorder: RED,
    defaultBackground: '#36383F',
    defaultBorder: '#2E3036',
    disabledBorder: GRAY,
    focusBackground: GRAY,
    focusBorder: BLUE_HIGHLIGHT,
    hoverBackground: GRAY_HIGHLIGHT,
    hoverBorder: DARK_GRAY_LINES,
    hoverOverlay: 'rgba(255, 255, 255, 0.1)',
    linkPrimary: BLUE_TEXT,
    linkPrimaryHover: BLUE_DARK,
    linkPrimaryLight: BLUE_LIGHT,
    linkSecondary: PURPLE,
    linkSecondaryDisabled: PURPLE_LIGHT,
    linkText: BLUE_LINK,
    rowHoverBackground: 'rgba(0, 0, 0, 0.1)',
    transparent: 'rgba(255, 255, 255, 0)',
  },
  loader: {
    color: '#EB0032',
    colorInverted: LIME_DARK,
  },
  logo: {
    color: WHITE,
  },
  monotone: {
    black: BLACK,
    blackTransparent: 'rgba(0, 0, 0, 0.6)',
    gray: GRAY,
    grey100: GREY100,
    grey200: GREY200,
    grey300: GREY300,
    grey400: GREY400,
    grey500: GREY500,
    purple: PURPLE,
    white: WHITE,
  },
  neutral: {
    n100: '#E7E8EA',
    n200: '#D8DADE',
    n300: '#CBCCD0',
    n400: '#BCBEC4',
    n500: '#AEB0B6',
  },
  progress: {
    negative: RED,
    positive: PURPLE,
  },
  shadow: {
    base: '12px 40px 120px rgba(106, 117, 139, 0.4)',
    frame: '0px 10px 40px rgba(0, 0, 0, 0.26)',
    menu: '4px 10px 20px rgba(6, 6, 6, 0.12)',
    popup: '10px 20px 40px rgba(0, 0, 0, 0.2)',
    small: '0px, 4px, rgba(0, 0, 0, 0.25)',
    window: '0px 10px 60px rgba(0, 0, 0, 0.7)',
  },
  status: {
    negative: RED,
    positive: LIME_TEXT,
  },
  text: {
    fileBrowser: DARK_CONTENT_MUTED,
  },
};
