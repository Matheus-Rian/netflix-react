import React from 'react'
import {Featured, FeaturedTransparencyVertical} from './styles'

function FeaturedMovie ({item}) {
  return (
    <Featured style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <FeaturedTransparencyVertical>

      </FeaturedTransparencyVertical>
    </Featured>
  )
}

export default FeaturedMovie;