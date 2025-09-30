"use client";

import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  importFunc: () => Promise<any>;
  placeholder?: React.ReactNode;
  rootMargin?: string;
}

export default function LazySection({
  importFunc,
  placeholder = <div className="h-screen animate-pulse bg-gray-100" />,
  rootMargin = "300px",
}: LazySectionProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Component, setComponent] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (shouldLoad && !Component) {
      importFunc().then((mod) => {
        setComponent(() => mod.default);
      });
    }
  }, [shouldLoad, Component, importFunc]);

  return <div ref={ref}>{Component ? <Component /> : placeholder}</div>;
}
