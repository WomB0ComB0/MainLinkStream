import React from 'react'
import {Card} from 'flowbite-react'
import { Data } from '../types';
const CardContainer = (props: Data) => {
  return (
    <React.Fragment>
      <Card>
        {props.name}
        {props.description}
        {props.featured}
        {props.image}
        {props.link}
        {props.id}
      </Card>
    </React.Fragment>
  )
}
export default CardContainer