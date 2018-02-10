import {
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/colors'

/* When needed add { darken, emphasize, lighten } to the next import */


/* import typography from 'material-ui/styles/typography' */

export default {
  spacing: 8,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#21412a',
    primary2Color: '#21412a',
    primary3Color: grey400,
    accent1Color: '#ffb41f',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#21412a',
    shadowColor: fullBlack
  },
  /*
  * What style you can edit to components from theme...
  * Source: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
  */
  appBar: {
    // color: palette.primary1Color,
    // textColor: palette.alternateTextColor,
    // height: spacing.desktopKeylineIncrement,
    // titleFontWeight: typography.fontWeightNormal,
    padding: 24 
  }
}
