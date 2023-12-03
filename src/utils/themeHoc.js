import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from 'theme'

const themeHoc = (OriginalComponent) => {
  function NewComponent(props) {
    return (
      <ThemeProvider theme={props?.theme || lightTheme}>
        {<OriginalComponent {...props} />}
      </ThemeProvider>
    )
  }
  return NewComponent
}

themeHoc.propTypes = {
  OriginalComponent: PropTypes.node.isRequired,
}

export default themeHoc
