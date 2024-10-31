"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as UILink,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

import { SearchIcon } from "./search.jsx";
import Login from "../auth/modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/redux/slices/authSlice.js";
import toast from "react-hot-toast";

export default function Nav() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("💔 Bye,Bye", {
      icon: false,
      duration: 3000,
    });
  };
  const DropdownAvatar = () => (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" onPress={handleLogout} color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  return (
    <Navbar className="w-full" shouldHideOnScroll isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="flex items-center gap-2">
            <div className=" w-8  h-full mb-6">
              <svg
                width="100"
                height="64"
                className=""
                viewBox="0 0 370.1111111111111 37.99350763146484"
                stroke="#9353D3"
              >
                <defs id="SvgjsDefs4402"></defs>
                <g
                  id="SvgjsG4403"
                  className=" scale-[2]"
                  featurekey="v37d4h-0"
                  transform="matrix(0.6332251271910806,0,0,0.6332251271910806,-0.8187599276154024,-1.2664502543821612)"
                  fill="#000000"
                >
                  <title xmlns="http://www.w3.org/2000/svg">
                    adventure-nature-outdoor-mountain-hiking-camping
                  </title>
                  <g
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="outline create copy 2"
                  >
                    <path d="M45.671,10.743,58.7,28.1l1.6-1.2L46.579,8.621a1,1,0,0,0-.729-.4,1.011,1.011,0,0,0-.778.29L40.746,12.84l1.414,1.414Z"></path>
                    <path d="M35.781,50.375c-.009-.011-.024-.014-.034-.025a.975.975,0,0,0-.313-.238l-.007,0a.831.831,0,0,0-.1-.052l-7.978-2.993a1,1,0,0,0-1.132.312l-8,10a1,1,0,0,0,.43,1.562l8,3c.01,0,.021,0,.032.005A.979.979,0,0,0,27,62H43a1,1,0,0,0,.781-1.625ZM36,55V53.851l4.912,6.14A5,5,0,0,1,36,55Zm-6.912,4.991L34,53.851V55A5,5,0,0,1,29.088,59.991Zm-1.76-10.8,6.03,2.261-6.686,8.357-6.03-2.261ZM33.893,60A7.063,7.063,0,0,0,35,58.6,7.063,7.063,0,0,0,36.107,60Z"></path>
                    <path d="M1.293,43.32l1.414,1.414L4,43.441V48H2v2H22V48H18V43.441l1.293,1.293,1.414-1.414L18,40.613V38.441l1.293,1.293,1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L16,38.441v2.172L13.293,43.32l1.414,1.414L16,43.441V48H6V43.441l1.293,1.293L8.707,43.32,6,40.613V38.441l1.293,1.293L8.707,38.32l-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L4,38.441v2.172Z"></path>
                    <path d="M11.707,28.293a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L10,31.414v2.172L7.293,36.293l1.414,1.414L10,36.414v2.172L7.293,41.293l1.414,1.414L10,41.414V46h2V41.414l1.293,1.293,1.414-1.414L12,38.586V36.414l1.293,1.293,1.414-1.414L12,33.586V31.414l1.293,1.293.785-.785.148.113,5.532-7.278,8.02-3.564,4.515,4.514a1,1,0,0,0,1.414,0l4.49-4.49L43.553,23.9l.012-.026,5.259,6.92-.531.531,1.414,1.414L51,31.441v2.172L48.293,36.32l1.414,1.414L51,36.441v2.145l-2.707,2.707,1.414,1.414L51,41.414V46h2V41.414l1.293,1.293,1.414-1.414L53,38.586V36.441l1.293,1.293,1.414-1.414L53,33.613V31.441l1.293,1.293,1.414-1.414-3-3a1,1,0,0,0-1.414,0l-1.041,1.041L32.8,6.4a1,1,0,0,0-1.592,0L13.327,29.913ZM32,8.652l8.863,11.661-2.416-1.208a1,1,0,0,0-1.154.188L33,23.586l-4.293-4.293a1,1,0,0,0-1.113-.207L22.27,21.452Z"></path>
                    <path d="M25,46V41.414l1.293,1.293,1.414-1.414L25,38.586V36.441l1.293,1.293,1.414-1.414L25,33.613V31.441l1.293,1.293,1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L23,31.441v2.172L20.293,36.32l1.414,1.414L23,36.441v2.145l-2.707,2.707,1.414,1.414L23,41.414V46Z"></path>
                    <path d="M33.293,39.734l1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L30,38.441v2.172L27.293,43.32l1.414,1.414L30,43.441V47h2V43.441l1.293,1.293,1.414-1.414L32,40.613V38.441Z"></path>
                    <path d="M40.293,32.734l1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L37,31.441v2.172L34.293,36.32l1.414,1.414L37,36.441v2.145l-2.707,2.707,1.414,1.414L37,41.414V46h2V41.414l1.293,1.293,1.414-1.414L39,38.586V36.441l1.293,1.293,1.414-1.414L39,33.613V31.441Z"></path>
                    <path d="M61.293,39.734l1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L58,38.441v2.172L55.293,43.32l1.414,1.414L58,43.441V48H46V43.441l1.293,1.293,1.414-1.414L46,40.613V38.441l1.293,1.293,1.414-1.414-3-3a1,1,0,0,0-1.414,0l-3,3,1.414,1.414L44,38.441v2.172L41.293,43.32l1.414,1.414L44,43.441V48H37v2H62V48H60V43.441l1.293,1.293,1.414-1.414L60,40.613V38.441Z"></path>
                    <path d="M10,14a6.011,6.011,0,0,0,5.186-3.024A1,1,0,0,0,13.8,9.625,2.45,2.45,0,0,1,12.5,10a2.5,2.5,0,0,1,0-5,2.562,2.562,0,0,1,.385.042,1,1,0,0,0,.764-1.779A5.931,5.931,0,0,0,10,2a6,6,0,0,0,0,12ZM9.657,4.015a4.5,4.5,0,0,0,1.554,7.8A3.938,3.938,0,0,1,10,12a4,4,0,0,1-.343-7.985Z"></path>
                    <rect x="51" y="10" width="2" height="2"></rect>
                    <rect x="57" y="2" width="2" height="2"></rect>
                    <rect x="43" y="5" width="2" height="2"></rect>
                    <rect x="58" y="18" width="2" height="2"></rect>
                    <rect x="4" y="16" width="2" height="2"></rect>
                    <rect x="9" y="23" width="2" height="2"></rect>
                    <rect x="17" y="17" width="2" height="2"></rect>
                    <rect x="23" y="2" width="2" height="2"></rect>
                    <rect x="48" y="22" width="2" height="2"></rect>
                    <path d="M48,62h8V60H54.264a4.148,4.148,0,0,0-.25-4.833l-.466-.583a2.158,2.158,0,0,1,.159-2.877l-1.414-1.414a4.155,4.155,0,0,0-1.065,4.065l-.7.7A4.107,4.107,0,0,0,49.841,60H48Zm3.941-5.527.309-.309.2.252a2.158,2.158,0,0,1-.159,2.877L52,59.586l-.059-.059A2.162,2.162,0,0,1,51.941,56.473Z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className=" sm:block text-xl font-bold text-secondary">
              Travellers
            </p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <UILink color="foreground" href="#">
              Features
            </UILink>
          </NavbarItem>
          <NavbarItem isActive>
            <UILink href="#" aria-current="page" color="secondary">
              Customers
            </UILink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full max-sm:hidden sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {isAuthenticated ? <DropdownAvatar /> : <Login />}
      </NavbarContent>
    </Navbar>
  );
}
