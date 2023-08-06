import { Link as ScrollLink } from 'react-scroll';
import { cn } from '../../utils/cn';
import DrawerMenu from '../Drawer';
import useApplyLinkStyle from './hooks/useApplyLinkStyle';
import useApplyNavBarStyle from './hooks/useApplyNavBarStyle';

const sectionsOffset = 120;

const sections = [
  { nameToDisplay: 'Home', sectionName: 'home' },
  { nameToDisplay: 'About us', sectionName: 'about' },
  { nameToDisplay: 'Services', sectionName: 'what-we-do' },
  { nameToDisplay: 'Get in touch', sectionName: 'contact' },
];

function NavBar() {
  const [navBarStyle] = useApplyNavBarStyle();
  const [activeSection] = useApplyLinkStyle({ offset: sectionsOffset });

  return (
    <nav
      className={cn(
        'fixed top-0 h-20 z-20 mx-auto flex w-screen items-center justify-between bg-white px-7 py-3 shadow-sm transition duration-700 xl:px-20',
        navBarStyle
      )}
    >
      <ul className="hidden h-full flex-row items-center justify-center gap-10 text-lg sm:flex">
        {sections.map(({ nameToDisplay, sectionName }) => {
          const isLinkSectionActive = activeSection === sectionName;
          return (
            <li key={sectionName}>
              <ScrollLink
                to={sectionName}
                smooth={true}
                duration={0}
                offset={-sectionsOffset}
                className={cn(
                  'cursor-pointer font-semibold text-black hover:text-third',
                  isLinkSectionActive ? 'text-third' : ''
                )}
              >
                {nameToDisplay}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <div className="inline sm:hidden">
        <DrawerMenu />
      </div>
      <img src="/logo.svg" className=" aspect-auto w-16 lg:w-20" />
    </nav>
  );
}

export default NavBar;
