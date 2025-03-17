'use client'

import { ChevronRightIcon } from "lucide-react";

export default function LaunchButton() {
  return (
    <div onClick={() => window.location.href = 'https://www.google.com'}>
      <span className="group inline-flex items-center">
        Get PyLaunch{" "}
        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  );
}