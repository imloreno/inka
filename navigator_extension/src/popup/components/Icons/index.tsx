import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { CustomizableComponent } from "../../models";
interface iProps extends CustomizableComponent {
  iconType?: string;
}

const Icons = ({ iconType = "", className = "" }: iProps) => {
  const iconPack = {
    itemMenu: faEllipsis,
    arrowDown: faCaretDown,
    user: faUser,
  };

  return (
    <FontAwesomeIcon
      icon={iconPack[iconType] ?? iconPack.itemMenu}
      className={className}
    />
  );
};

export default Icons;
