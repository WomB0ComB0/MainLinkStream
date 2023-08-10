import {Card} from 'flowbite-react'
import { Data } from '../types';
const CardContainer = (props: Data) => {
  return (
    <>
      <Card>
        {props.name}
      </Card>
    </>
  )
}
export default CardContainer