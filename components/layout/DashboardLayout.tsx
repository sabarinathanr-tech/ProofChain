import { CommandPalette } from './CommandPalette';
import { Sidebar } from './Sidebar';
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <header className="topbar">
          <CommandPalette />
          <div className="topbar-actions">
            <span className="status amber">Database ready</span>
            <span className="avatar">SR</span>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
