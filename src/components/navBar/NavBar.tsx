import { useMediaQuery } from 'react-responsive';
import { cn } from '../../utils/cn';
import { sectionsID, siteOffset } from '../../utils/projectData';
import DrawerMenu from './Drawer';
import ScrollLink from '../ScrollLink';
import useApplyLinkStyle from './hooks/useApplyLinkStyle';
import useApplyNavBarStyle from './hooks/useApplyNavBarStyle';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t } = useTranslation();
  const [navBarStyle] = useApplyNavBarStyle();
  const [activeSection] = useApplyLinkStyle({ offset: siteOffset });
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const sectionsData = [
    { nameToDisplay: t('navBar.home'), sectionId: sectionsID.home },
    { nameToDisplay: t('navBar.aboutUs'), sectionId: sectionsID.aboutUs },
    {
      nameToDisplay: t('navBar.whatWeDo'),
      sectionId: sectionsID.whatWeAreDoing,
    },
    { nameToDisplay: t('navBar.contactUs'), sectionId: sectionsID.getInTouch },
  ];
  return (
    <nav
      className={cn(
        'fixed top-0 h-20 z-20 mx-auto flex w-screen items-center justify-between bg-white px-7 py-3 shadow-sm transition duration-700 xl:px-16',
        navBarStyle
      )}
    >
      {!isMobile ? (
        <ul className="flex h-full flex-row items-center justify-center gap-10 text-lg">
          {sectionsData.map(({ nameToDisplay, sectionId }) => {
            const isLinkSectionActive = activeSection === sectionId;
            return (
              <li key={sectionId}>
                <ScrollLink
                  to={sectionId}
                  className={cn(
                    'cursor-pointer font-semibold text-black hover:text-main',
                    isLinkSectionActive ? 'text-main' : ''
                  )}
                >
                  {nameToDisplay}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <DrawerMenu activeSection={activeSection} sectionsData={sectionsData} />
      )}
      <img src="/logo.svg" className=" aspect-auto w-16 lg:w-20" />
    </nav>
  );
}

export default NavBar;
