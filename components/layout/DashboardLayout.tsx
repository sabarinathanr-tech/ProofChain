import { CommandPalette } from './CommandPalette';
import { Sidebar } from './Sidebar';
export function DashboardLayout({ children }: { children: React.ReactNode }) { return <div className="dashboard-shell"><Sidebar /><div className="dashboard-main"><header className="topbar"><CommandPalette /><span className="status green">Demo workspace</span></header><main className="content">{children}</main></div></div>; }
