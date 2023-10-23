import { Nav, Menu } from './semantics/index'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const router = useNavigate();
  return (
    <Nav>
      <Menu>
        <li>
          <a href={`/`}>
            <img src="" alt="" />
            <span>
              Links
            </span>
          </a>
        </li>
      </Menu>
      <Menu>
        <li>
          
        </li>
        <li>

        </li>
        <li>

        </li>
      </Menu>
    </Nav>
  )
}

export default NavBar