import { Logo } from "./logo/logo";
import { List } from "./list/list";
import { Profile } from "./Profile/Profile";
import "./style.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <List />
      <Profile />
    </div>
  );
};
