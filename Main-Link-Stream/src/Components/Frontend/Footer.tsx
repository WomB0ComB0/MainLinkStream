import {Footer}  from 'flowbite-react';
export const footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Footer className=''>
      <Footer.Divider/>
      <Footer.Copyright className='' href="#" by="Mike Odnis" year={year}/> all rights reserved
      <Footer.LinkGroup className=''>
        <Footer.Link href="#">Link 1</Footer.Link>
        <Footer.Link href="#">Link 2</Footer.Link>
        <Footer.Link href="#">Link 3</Footer.Link>
        <Footer.Link href="#">Link 4</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}