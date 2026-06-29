import { PageHeader } from '@/components/common/PageHeader';
import { CompanyProfileForm } from '@/components/dashboard/CompanyProfileForm';

const settings = ['Company profile', 'Users and roles', 'Permissions', 'Notifications', 'Security', 'Billing', 'Integrations', 'AWS configuration'];

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Manage company, users, roles, security, billing, integrations, and AWS configuration." action={<button className="button">Save changes</button>} />
      <CompanyProfileForm />
      <div style={{ height: 18 }} />
      <div className="settings-grid">{settings.map((item) => <div className="card" key={item}><p className="eyebrow">Workspace</p><h3>{item}</h3><p className="metric">Configured for a production deployment path with environment variables and role-based access.</p></div>)}</div>
    </>
  );
}
