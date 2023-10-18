import React from 'react'
import { Card } from 'flowbite-react'
const FeaturedContainer = ({featured, id, sourceSVG, link, name}: Data) => {
  return (
    <React.Fragment>
      {featured && (
        <a href={link} key={id} className='' rel={`noopener noreferrer`} id={`${id}`}>
          <Card className=''>
            <picture className=''>
              <img src={sourceSVG} alt={`${name} image`} className=''/>
            </picture>
          </Card>
          <p className=''>
            {name}
          </p>
        </a>
      )}
    </React.Fragment>
  )
}
export default FeaturedContainer