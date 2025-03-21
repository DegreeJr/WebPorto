"use client";
import React from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (    
    <Menu>
      <MenuItem item="Home" href="/" />
      <MenuItem item="About" href="/About" />
      <MenuItem item="Projects" href="/Projects" />
      <MenuItem item="Contact" href="/Contact" />
    </Menu>
  );
}
