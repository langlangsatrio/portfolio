"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-10 backdrop-blur-md">
      <Card className="flex justify-between items-center px-3 py-3 w-full h-full rounded-none lg:flex lg:justify-between lg:items-center lg:px-36 lg:py-7 lg:w-full lg:rounded-none ">
        <div className="flex gap-3 justify-center items-center">
          <div className="hamburger lg:hidden">
            <GiHamburgerMenu />
          </div>
          <div className="w-fit h-fit">
            <h1 className="lg:text-lg lg:font-bold">SATRIO</h1>
          </div>
        </div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-20">
              <NavigationMenuItem>
                <Link href="#service" legacyBehavior passHref>
                  <NavigationMenuLink>Service</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#work" legacyBehavior passHref>
                  <NavigationMenuLink>Portfolio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button className="hidden lg:flex">
            <IoMdCall /> Book an introductory call
          </Button>
          <Button className="flex text-sm lg:hidden">
            Book introductory call
          </Button>
        </div>
      </Card>
    </div>
  );
}
