import React from 'react'
import Loader from 'react-loader-spinner'

const SimpleLoader = ({ height, width, color }) => {
  return <Loader type='TailSpin' color={color} height={height} width={width} />
}

SimpleLoader.defaultProps = {
  height: 80,
  width: 80,
  color: '#343a40',
}

export default SimpleLoader
