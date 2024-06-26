"use client";
import "animate.css";
import Image from "next/image";
import LogoUAB from "@/images/LogoUAB.png";
import Logo_A from "@/images/Logo_A.png";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigations = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

const navigation = [
  {
    id: 1,
    name: "UAB",
    href: "/uab",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 2,
    name: "Ventajas",
    href: "/ventajas",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 3,
    name: "Carreras",
    href: "/carreras",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 4,
    name: "Investigacion",
    href: "http://ojs.uab.edu.bo/ojs/",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 5,
    name: "Postgrado",
    href: "/postgrado",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 6,
    name: "Complementario",
    href: "/complementario",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 7,
    name: "Colegio",
    href: "https://ueab.educacionadventista.com/",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 8,
    name: "Admisiones",
    href: "/admisiones",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 9,
    name: "Reglamentos uab",
    href: "/reglamentos",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 10,
    name: "Extensión Social",
    href: "/extensionSocial",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 11,
    name: "Iglesia",
    href: "https://sva.adventistas.org/es/",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 12,
    name: "Escuelas",
    href: "/escuelas",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 13,
    name: "CRAI",
    href: "https://crai.uab.edu.bo/",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 14,
    name: "Sistema Academico",
    href: "/login",
    icon: HomeIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <Link href={"/"}>
                      <div className="flex h-24 shrink-0 items-center justify-center mt-5 ">
                        <Image
                          className="h-full w-auto"
                          src={LogoUAB}
                          alt="Logo Universidad Adventista de Bolivia"
                          priority
                        />
                      </div>
                    </Link>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <Link href={"/"} className="animate__animated animate__slideInDown">
              <div className="flex h-32 shrink-0 items-center justify-center my-5">
                <Image
                  className="h-full w-full"
                  src={LogoUAB}
                  alt="Your Company"
                  priority
                />
              </div>
            </Link>

            <nav className="flex flex-1 flex-col animate__animated animate__slideInLeft">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <Link
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                    aria-disabled="true"
                  >
                    <Image
                      className="h-8 w-8 rounded-full bg-white"
                      src={Logo_A}
                      alt="Logo Universidad Adventista de Bolivia"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Universidad Adventista</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <Image
              className="h-8 w-8 rounded-full bg-white"
              src={Logo_A}
              alt="Logo Universidad Adventista de Bolivia"
            />
          </a>
        </div>

        <main className="py-7 lg:pl-72 bg-slate-600">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
