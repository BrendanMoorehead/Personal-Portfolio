import { Link, animateScroll as scroll } from 'react-scroll';
const HeaderButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      duration={1000}
      offset={-80}
      className="px-4 py-1 rounded-3xl border-1.5 border-white hover:bg-stone-900 transition-colors duration-300 ease-in-out select-none"
    >
      <p className="center-self text-white">{text}</p>
    </Link>
  );
};

export default HeaderButton;
