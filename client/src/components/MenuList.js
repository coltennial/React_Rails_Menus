import React from "react";
import Menu from "./Menu";

const MenuList = ({menus}) => (
  <div>
    {
      menus.map( menu => 
        <Menu 
          key={menu.id}
          menuName={menu.name}
          {...menu}
        />
      )
    }
  </div>
);


export default MenuList;