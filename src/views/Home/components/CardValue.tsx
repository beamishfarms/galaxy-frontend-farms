import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'

const StyledNumber = styled(Text)`
  color: #99A3FF;
`

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  prefix?: string
}

const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '40px', prefix }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyledNumber bold fontSize={fontSize}>
      {prefix}{countUp}
    </StyledNumber>
  )
}

export default CardValue
