import { PageHeader } from '@/components/common/PageHeader';
import { AIAlerts } from '@/components/dashboard/AIAlerts';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Charts } from '@/components/dashboard/Charts';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentShipments } from '@/components/dashboard/RecentShipments';
import { StatsCards } from '@/components/dashboard/StatsCards';
export default function DashboardPage() { return <><PageHeader title="Operations dashboard" description="Monitor shipment risk, dispute readiness, and recovery performance." /><StatsCards /><div className="grid" style={{gridTemplateColumns:'minmax(0, 1.4fr) minmax(280px, .6fr)', marginTop:18}}><RecentShipments /><AIAlerts /><Charts /><ActivityFeed /><QuickActions /></div></>; }
