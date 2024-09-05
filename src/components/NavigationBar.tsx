import React from 'react'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
  } from "@/src/components/icons";

export const NavigationBar = () => {
    const searchInput = (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      );
    return (
    <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">NEXTMANGA</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="/" aria-current="page">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="#" color='foreground'>
                    Popular
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Categories
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="package">
                    Package
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <ThemeSwitch />
            <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                </Button>
            </NavbarItem>
        </NavbarContent>
    </NextUINavbar>
  )
}
