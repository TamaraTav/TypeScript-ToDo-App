import { iconSun, iconMoon } from "../assets";

type HeaderProps = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const Header = ({ isDark, setIsDark }: HeaderProps) => {
  return (
    <header>
      <h1>TODO</h1>
      <img
        src={isDark ? iconSun : iconMoon}
        alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setIsDark(!isDark)}
      />
    </header>
  );
};

export default Header;
