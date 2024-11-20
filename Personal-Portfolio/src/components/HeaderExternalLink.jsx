const HeaderButton = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-1 rounded-3xl border-1.5 border-white hover:bg-stone-900 transition-colors duration-300 ease-in-out select-none"
    >
      <p className="center-self text-white">{text}</p>
    </a>
  );
};

export default HeaderButton;
