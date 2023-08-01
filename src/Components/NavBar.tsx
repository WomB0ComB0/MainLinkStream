import { Navbar, Container, Image } from 'react-bootstrap'
export default function NavBar() {
  return (
    <header>
      <Navbar bg='' variant=''>
        <Container>
          <Navbar.Brand href=".">
            <Image rounded={true} src="" width={30} height={30} className='align-top d-inline-block' alt='Link Stream logo'/>{' '}Link Stream</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}