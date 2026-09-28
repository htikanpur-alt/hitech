"use client";

import { useEffect, useRef } from "react";

export default function SiteNavigation() {
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = (except?: HTMLDetailsElement) => {
    navRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((menu) => {
      if (menu !== except) menu.removeAttribute("open");
    });
  };

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeMenus();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <nav ref={navRef} className="main-navigation" aria-label="Main navigation">
      <div className="site-shell navigation-inner">
        <a href="/#home">HOME</a>
        <a href="/about-us">ABOUT US</a>
        <details onToggle={(event) => event.currentTarget.open && closeMenus(event.currentTarget)}>
          <summary>PRODUCTS <span aria-hidden="true">⌄</span></summary>
          <div className="menu-dropdown" onClick={() => closeMenus()}>
            <span className="menu-group-label">Chemical Products</span>
            <a href="/#chemicals">Detergent &amp; Cleaning Products</a>
            <span className="menu-group-label">Engineering Products</span>
            <a href="/#machinery">Machinery Manufacturing</a><a href="/#material-handling">Material Handling Machinery</a>
            <a href="/#products">Equipment &amp; Tools</a>
          </div>
        </details>
        <details onToggle={(event) => event.currentTarget.open && closeMenus(event.currentTarget)}>
          <summary>ENGINEERING <span aria-hidden="true">⌄</span></summary>
          <div className="menu-dropdown" onClick={() => closeMenus()}>
            <a href="/#material-handling">Conveyors &amp; Lifts</a><a href="/#services">Plant Installation</a>
            <a href="/#services">Piping &amp; Utilities</a><a href="/#services">Structural Fabrication</a>
          </div>
        </details>
        <details onToggle={(event) => event.currentTarget.open && closeMenus(event.currentTarget)}>
          <summary>SERVICES <span aria-hidden="true">⌄</span></summary>
          <div className="menu-dropdown" onClick={() => closeMenus()}>
            <a href="/#services">HSE Consultancy</a><a href="/#services">Technical &amp; Safety Audits</a>
            <a href="/#services">Factory Licensing</a><a href="/#services">Fire Fighting Systems</a>
          </div>
        </details>
        <a href="/#contact">CONTACT</a>
        <details className="mobile-navigation" onToggle={(event) => event.currentTarget.open && closeMenus(event.currentTarget)}>
          <summary aria-label="Open navigation">MENU ☰</summary>
          <div className="mobile-dropdown" onClick={() => closeMenus()}>
            <a href="/#home">Home</a><a href="/about-us">About Us</a><a href="/#products">Products</a>
            <a href="/#machinery">Machinery</a><a href="/#chemicals">Chemicals</a>
            <a href="/#services">Services</a><a href="/#contact">Contact</a>
          </div>
        </details>
      </div>
    </nav>
  );
}
