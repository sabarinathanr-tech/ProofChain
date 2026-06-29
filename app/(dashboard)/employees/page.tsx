import { ModulePage } from '@/components/dashboard/ModulePage';
const employees = [
  { id: 'USR-101', name: 'Maya Chen', role: 'Warehouse Manager', permissions: 'Verify shipments', status: 'Active' },
  { id: 'USR-102', name: 'Arjun Mehta', role: 'Procurement Lead', permissions: 'Manage POs, vendors', status: 'Active' },
  { id: 'USR-103', name: 'Nora Silva', role: 'Finance Analyst', permissions: 'Reports, disputes', status: 'Invited' },
];

export default function EmployeesPage() {
  return <ModulePage title="Employees" description="Invite team members, assign roles, and control operational permissions." actionLabel="Invite employee" rows={employees} columns={[{ key: 'id', label: 'User' }, { key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }, { key: 'permissions', label: 'Permissions' }, { key: 'status', label: 'Status' }]} />;
}
