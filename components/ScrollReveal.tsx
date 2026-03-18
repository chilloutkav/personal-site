"use client";

import { useRef, useEffect, type ReactNode } from "react";

const THRESHOLD = 0.15;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, (entry: IntersectionObserverEntry) => void>();

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry);
        }
      },
      { threshold: THRESHOLD }
    );
  }
  return sharedObserver;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();

    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        if (delay > 0) {
          setTimeout(() => el.classList.add("is-visible"), delay);
        } else {
          el.classList.add("is-visible");
        }
        observer.unobserve(el);
        callbacks.delete(el);
      }
    });

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [delay]);

  return (
    // @ts-expect-error -- dynamic tag with ref is safe here
    <Tag ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </Tag>
  );
}
