import React from "react";
import Link from "next/link";
function SideBar() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-64 h-full p-4 bg-gray-900">
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-600"
        >
          <span className="ml-3 text-lg font-bold text-white">Examen</span>
        </a>
        <ul className="mt-4">
          <li className="mb-1 group active">
            <Link
              href="/"
              className="flex items-center px-4 py-2
             text-gray-300 bg-gray-800 rounded-md hover:bg-gray-950
              hover:text-gray-100"
            >
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 group active">
            <Link
              href="/propiedades"
              className="flex items-center px-4 py-2 text-gray-300 bg-gray-800 rounded-md hover:bg-gray-950 hover:text-gray-100"
            >
              <span className="text-sm">Propiedades</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
