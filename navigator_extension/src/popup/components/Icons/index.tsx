import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CustomizableComponent } from "../../models";

interface iProps extends CustomizableComponent {
  iconType?: string;
}

const Icons = ({ iconType = "", className = "" }: iProps) => {
  const iconPack = {
    cofee: faCoffee,
    itemMenu: faEllipsis,
  };

  return (
    <FontAwesomeIcon
      icon={iconPack[iconType] ?? iconPack.cofee}
      className={className}
    />
  );
};

export default Icons;
