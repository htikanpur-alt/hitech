"use client";

import { useEffect, useRef } from "react";

export default function SiteNavigation() {
  const productsMenu = useRef<HTMLDetailsElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  const closeMenus = (except?: HTMLDetailsElement) => {
    [productsMenu.current, mobileMenu.current].forEach((menu) => {
      if (menu && menu !== except) menu.removeAttribute("open");
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      const clickedInsideMenu = [productsMenu.current, mobileMenu.current]
        .some((menu) => menu?.contains(target));

      if (!clickedInsideMenu) closeMenus();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#about">About Us</a>
        <details
          ref={productsMenu}
          onToggle={(event) => {
            if (event.currentTarget.open) closeMenus(event.currentTarget);
          }}
        >
          <summary>Products <span aria-hidden="true">⌄</span></summary>
          <div className="nav-dropdown" onClick={() => closeMenus()}>
            <a href="#chemicals">Chemical Manufacturing</a>
            <a href="#machinery">Machinery Manufacturing</a>
            <a href="#material-handling">Conveyors &amp; Material Handling</a>
            <a href="#supplies">Equipment &amp; Tools</a>
          </div>
        </details>
        <a href="#services">Services</a><a className="nav-cta" href="#contact">Contact</a>
      </nav>
      <details
        className="mobile-menu"
        ref={mobileMenu}
        onToggle={(event) => {
          if (event.currentTarget.open) closeMenus(event.currentTarget);
        }}
      >
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation" onClick={() => closeMenus()}>
          <a href="#home">Home</a><a href="#about">About Us</a>
          <a href="#chemicals">Chemical Manufacturing</a><a href="#machinery">Machinery Manufacturing</a>
          <a href="#material-handling">Conveyors &amp; Material Handling</a>
          <a href="#supplies">Equipment &amp; Tools</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
      </details>
    </>
  );
}
