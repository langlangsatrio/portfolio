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

export default function Navbar() {
  return (
    <div>
      <Card className="lg:flex lg:justify-between lg:items-center lg:px-36 lg:py-7 lg:w-full lg:rounded-none">
        <div className="w-fit h-fit">
          <h1 className="lg:text-lg lg:font-bold">SATRIO DEVELOPER</h1>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-20">
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink>Service</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink>Portfolio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button>
            <IoMdCall /> Book an introductory call
          </Button>
        </div>
      </Card>
    </div>
  );
}
