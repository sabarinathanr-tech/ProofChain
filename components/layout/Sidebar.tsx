import Link from 'next/link';
import { sidebarItems } from '@/constants/sidebar';
export function Sidebar() {
  return (
    <aside className="sidebar">
      <Link className="logo" href="/dashboard">
        <span className="logo-mark">P</span>
        <span>
          ProofChain
          <small>Evidence OS</small>
        </span>
      </Link>
      <div className="sidebar-card">
        <p>Recovery this month</p>
        <strong>$186k</strong>
        <span>18% ahead of target</span>
      </div>
      <nav aria-label="Dashboard navigation">
        {sidebarItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
