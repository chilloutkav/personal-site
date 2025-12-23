import Link from "next/link";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  href: string;
  matchPaths?: string[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    matchPaths: ['/']
  },
  {
    label: 'Projects',
    href: '/projects',
    matchPaths: ['/projects']
  },
  {
    label: 'About',
    href: '/about',
    matchPaths: ['/about']
  }
];

function isActiveRoute(currentPath: string, item: NavItem): boolean {
  if (item.matchPaths) {
    if (item.matchPaths.includes(currentPath)) {
      return true;
    }
  }

  if (item.href === '/projects' && currentPath.startsWith('/projects')) {
    return true;
  }

  return currentPath === item.href;
}

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="site-nav">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`site-nav-link ${isActiveRoute(router.pathname, item) ? 'site-nav-link--active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
