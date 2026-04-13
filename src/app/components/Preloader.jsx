"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LayoutCompo from "../LayoutCompo";

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image
          src="/Images/Preloader.gif"
          width={200}
          height={200}
          alt="Loading"
        />
      </div>
    );
  }

  return <LayoutCompo>{children}</LayoutCompo>;
}
