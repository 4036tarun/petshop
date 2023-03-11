import { Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";

export default function Mynavbar1(){

    return(
        <>
        <Navbar
  fluid={true}
  rounded={true}
>
  <NavbarBrand
    // as={{
    //   $$typeof: Symbol(react.forward_ref),
    //   render: LinkWithRef
    // }}
    to="/navbars"
  >
    <img
      src="https://e7.pngegg.com/pngimages/665/792/png-clipart-black-wolf-illustration-dog-arctic-wolf-drawing-anime-wolf-blue-mammal.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      PET SHOP
    </span>
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink
      href="/navbars"
      active={true}
    >
      Home
    </NavbarLink>
    <NavbarLink
    //   as={{
    //     $$typeof: Symbol(react.forward_ref),
    //     render: LinkWithRef
    //   }}
    // to="/navbars"
      href="/navbars"
    >
      About
    </NavbarLink>
    <NavbarLink href="/navbars">
      Services
    </NavbarLink>
    <NavbarLink href="/navbars">
      Pricing
    </NavbarLink>
    <NavbarLink href="/navbars">
      Contact
    </NavbarLink>
    <NavbarLink href="/navbars">
      Medical Help
    </NavbarLink>
  </NavbarCollapse>
</Navbar>
        </>
    )
}