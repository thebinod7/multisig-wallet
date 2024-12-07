import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav>
      <div id="navigation-bar">
        <div className="logo">MSW</div>
        <ul className="nav-items">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ConnectButton showBalance={false} />
      </div>
    </nav>
  );
}
