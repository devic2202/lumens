import React from "react";
import home from "./images/home.svg";
import bell from "./images/bell.svg";
import bell2 from "./images/bell-2.svg";
import line from "./images/line-card.svg";
import card from "./images/card.svg";
import user from "./images/user-1.svg";
import user2 from "./images/user-2.svg";
import point from "./images/point.svg";
import "./menu.scss";
function Menu(props) {
  const menuList = [
    {
      key: "home",
      icon: home,
    },
    {
      key: "bell",
      icon: bell,
      iconSuf: bell2,
      iconPoint: point,
    },
    {
      key: "card",
      icon: card,
      className: "line-card",
      iconPre: line,
    },
    {
      key: "user",
      iconPre: user,
      icon: user2,
      className: "pre-user",
    },
  ];
  return (
    <div className="menu">
      {menuList.map((it) => (
        <div className={it?.key}>
          {it?.iconPre && (
            <p className={it?.className}>
              <img key={it?.className} src={it?.iconPre} alt={it?.iconPre} />
            </p>
          )}
          {it?.iconPoint && (
            <p className="point">
              <img key={it?.key} src={it?.iconPoint} alt={it?.iconPoint} />
            </p>
          )}
          <p>
            <img key={it?.key} src={it?.icon} alt={it?.icon} />
          </p>
          {it?.iconSuf && (
            <p className="suf-bell">
              <img key={it?.key} src={it?.iconSuf} alt={it?.iconSuf} />
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Menu;
