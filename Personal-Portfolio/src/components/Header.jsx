import HeaderButton from './HeaderButton';
import HeaderExternalLink from './HeaderExternalLink';
import { Link, animateScroll as scroll } from 'react-scroll';
function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div
      className="flex flex-row px-56 py-6 place-content-between h-full w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-mxl bg-opacity-30 border-gray-100 sticky top-0 z-40
"
    >
      <div className="flex gap-4">
        <HeaderButton text="Experience" link="experience" />
        {/* <HeaderButton text="Projects" link="projects" /> */}
        <HeaderButton text="Education" link="education" />
      </div>
      <div className="header__name select-none">
        <Link to={top} smooth={true} duration={1000} onClick={scrollToTop}>
          B. MOOREHEAD
        </Link>
      </div>
      <div className="flex gap-4">
        <HeaderExternalLink
          text="Github"
          link="https://github.com/BrendanMoorehead"
        />
        <HeaderExternalLink
          text="LinkedIn"
          link="https://www.linkedin.com/in/brendan-moorehead-319657223/"
        />
        <HeaderButton text="Contact" link="contact" />
      </div>
    </div>
  );
}

export default Header;
