import React from "react";
import Link from "next/link";

function DashboardMenu(props) {
  return (
    <div className="dashboard menu-container">
      <ul className="list-menu">
        <li>
          <Link href="#">about us</Link>
        </li>
        <li>
          <Link href="#">become a trader</Link>
        </li>
        <li>
          <Link href="#">become an investor</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li className="text-center">
          <Link href="/register" className="get-started">
            get started
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardMenu;
