import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="site-project-breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="site-breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="site-breadcrumb-current">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="site-breadcrumb-separator">→</span>
          )}
        </span>
      ))}
    </div>
  );
}
