import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <>
      <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="my-4 flex w-full flex-col items-center justify-center gap-8 font-semibold">
          <span className="flex w-full cursor-pointer justify-center py-2 text-2xl hover:text-main">
            בית
          </span>
          <span className="flex w-full cursor-pointer justify-center py-2 text-2xl hover:text-main">
            עלינו
          </span>
          <span className="flex w-full cursor-pointer justify-center py-2 text-2xl hover:text-main">
            תפריט
          </span>
          <span className="flex w-full cursor-pointer justify-center py-2 text-2xl hover:text-main">
            צור קשר
          </span>
        </div>
      </Drawer>
      <MenuIcon
        className=" cursor-pointer text-2xl text-black"
        onClick={toggleDrawer(true)}
      />
    </>
  );
}
export default DrawerMenu;
