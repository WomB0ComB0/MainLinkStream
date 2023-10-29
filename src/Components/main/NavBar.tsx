/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quote-props */
import { useState } from 'react';
import { Twirl } from 'hamburger-react';
import { Nav, Menu } from '../semantics/index';
import { ModeToggle } from '../browser/dom-states/index';
import { GlobeAltIcon, ChartBarIcon, BookOpenIcon } from '../browser/icons/main/index';
import { NavLinks } from '../../constants';
import { useIsMobile } from '../../hooks/index';

type IconTypes = typeof GlobeAltIcon | typeof ChartBarIcon | typeof BookOpenIcon;

const linkIcons: Record<string, IconTypes> = {
  Portfolio: GlobeAltIcon,
  Stats: ChartBarIcon,
  Resume: BookOpenIcon,
};

const MainNav = ({ toggle }: { toggle: () => void }) => {
  const isMobile = useIsMobile(320);
  const isTablet = useIsMobile(768);
  return (
    <Nav
      className={`sticky top-0 z-20 m-0 flex h-[70px] w-full flex-row items-center justify-between
px-[10px]
backdrop-blur-lg`}
    >
      <Menu>
        <li>
          <a href={`/`}>
            <img src="" alt="" />
            <span>Links</span>
          </a>
        </li>
      </Menu>
      <Menu>
        {NavLinks.map(({ name, link }, index: IndexProps) => {
          const IconComponent = linkIcons[name] ?? null;
          return (
            <li key={index}>
              <a href={link}>
                {IconComponent && <IconComponent />}
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </Menu>
      <Menu>
        <li>
          <ModeToggle />
        </li>
      </Menu>
    </Nav>
  );
};

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }): JSX.Element => (
  <>
    {' '}
    <div
      className="sidebar-container fixed left-0 z-10 grid h-full w-full justify-center overflow-hidden pt-[120px]"
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`,
      }}
    >
      <ul className={`sidebar-nav text-center text-xl leading-relaxed`}>
        {NavLinks.map(({ link, name }, index: IndexProps) => (
          <li key={index}>
            <a href={link} onClick={toggle}>
              <p>{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainNav toggle={toggle} />
    </>
  );
};

export default NavBar;
