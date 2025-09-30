"use client";

import { useState, useEffect, ReactNode } from "react";
import { LoadingPage } from "@/components/loading-page";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return <LoadingPage />;
  return <>{children}</>;
}
