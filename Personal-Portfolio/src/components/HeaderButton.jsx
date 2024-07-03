const HeaderButton = ({ text, link }) => {
  return (
    <button className="px-4 py-1 rounded-3xl border-1.5 border-white">
      <p className="center-self text-white">{text}</p>
    </button>
  );
};

export default HeaderButton;
