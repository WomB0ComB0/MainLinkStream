import React from 'react'
import { Card } from './ui/card'
const FeaturedContainer = ({featured, id, sourceSVG, link, name}: Data) => {
  return (
    <React.Fragment>
      {featured && (
        <a href={link} key={id} className='' rel={`noopener noreferrer`} id={`${id}`}>
          <Card className=''>
            <picture className=''>
                <img src={sourceSVG?.toString()} alt={`${name} image`} className=''/>
            </picture>
          </Card>
        </a>
      )}
    </React.Fragment>
  )
}
export default FeaturedContainer