import React from 'react'

//Use this version ("Resolution Switching Version") if we have images that change with resolution or for retina display 
//(uses "srcset" to give the browser options and let it make smart decisions)
//Not to be used for images that change orientation ("Art Direction") i.e. if a landscape image appears too small on mobile that it's hard to make out, 
//so a portrait image may be more suitable

export function PictureSrcSetRS({xSmallImg, smallImg, mediumImg, largeImg, xLargeImg, xxLargeImg}) {
  return (
    <img srcSet={`${xSmallImg}`} />
  )
}