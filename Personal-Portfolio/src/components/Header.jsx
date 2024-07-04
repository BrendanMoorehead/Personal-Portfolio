import HeaderButton from './HeaderButton';

function Header() {
  return (
    <div
      className="flex flex-row px-56 py-6 place-content-between h-full w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-mxl bg-opacity-30 border-gray-100 sticky top-0
"
    >
      <div className="flex gap-4">
        <HeaderButton text="Experience" link="experience" />
        <HeaderButton text="Projects" link="projects" />
        <HeaderButton text="Education" link="education" />
      </div>
      <div className="header__name">BRENDAN</div>
      <div className="flex gap-4">
        <HeaderButton text="Github" />
        <HeaderButton text="LinkedIn" />
        <HeaderButton text="Contact" />
      </div>
    </div>
  );
}

export default Header;
