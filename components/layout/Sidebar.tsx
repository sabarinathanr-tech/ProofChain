import Link from 'next/link';
import { sidebarItems } from '@/constants/sidebar';
export function Sidebar() { return <aside className="sidebar"><Link className="logo" href="/dashboard"><span className="logo-mark">P</span>ProofChain</Link><nav aria-label="Dashboard navigation">{sidebarItems.map((item) => <Link href={item.href} key={item.href}>{item.icon} {item.label}</Link>)}</nav></aside>; }
