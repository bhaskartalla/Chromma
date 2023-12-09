import React from 'react'
import { useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

const ProductDescription = () => {
  const theme = useTheme()
  const location = useLocation()

  return (
    <div>
      <Typography variant='h2' style={{ color: theme.palette.color.primary }}>
        ProductDescription {location.state.skuId}
      </Typography>
    </div>
  )
}

ProductDescription.propTypes = {}

export default ProductDescription
