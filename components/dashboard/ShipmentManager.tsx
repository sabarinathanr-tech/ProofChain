'use client';

import { FormEvent, useMemo, useState } from 'react';
import { shipments as initialShipments, ShipmentRecord } from '@/lib/demo-data';
import { useToast } from '@/components/ui/ToastProvider';

type ShipmentForm = Omit<ShipmentRecord, 'id' | 'risk' | 'discrepancy'>;

const emptyForm: ShipmentForm = {
  purchaseOrder: '',
  vendor: '',
  carrier: '',
  warehouse: '',
  expectedArrival: '',
  status: 'Processing',
  value: '',
};

function badgeClass(risk: string) {
  if (risk === 'High') return 'red';
  if (risk === 'Medium') return 'amber';
  return 'green';
}

function makeTrackingId(index: number) {
  return `PC-${new Date().getFullYear()}-${String(7400 + index).padStart(5, '0')}`;
}

export function ShipmentManager() {
  const { showToast } = useToast();
  const [items, setItems] = useState(initialShipments);
  const [selectedId, setSelectedId] = useState(initialShipments[0]?.id ?? '');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<ShipmentForm>(emptyForm);

  const selected = items.find((item) => item.id === selectedId) ?? items[0];
  const filtered = useMemo(() => items.filter((item) => {
    const matchesQuery = [item.id, item.vendor, item.purchaseOrder, item.carrier, item.warehouse].join(' ').toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesQuery && matchesStatus;
  }), [items, query, statusFilter]);

  function resetForm() {
    setEditingId(null);
    setForm(emptyForm);
  }

  function startEdit(item: ShipmentRecord) {
    setEditingId(item.id);
    setForm({
      purchaseOrder: item.purchaseOrder,
      vendor: item.vendor,
      carrier: item.carrier,
      warehouse: item.warehouse,
      expectedArrival: item.expectedArrival,
      status: item.status,
      value: item.value,
    });
  }

  function removeShipment(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
    setSelectedId((current) => current === id ? items[0]?.id ?? '' : current);
    showToast({ kind: 'warning', title: 'Shipment deleted', message: `${id} was removed from this workspace.` });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.purchaseOrder || !form.vendor || !form.carrier || !form.warehouse || !form.expectedArrival) {
      showToast({ kind: 'error', title: 'Missing shipment info', message: 'Complete required shipment fields before saving.' });
      return;
    }
    setIsLoading(true);
    window.setTimeout(() => {
      setItems((current) => {
        if (editingId) {
          return current.map((item) => item.id === editingId ? { ...item, ...form } : item);
        }
        const nextId = `SH-${1041 + current.length}`;
        return [{ id: nextId, risk: 'Medium', discrepancy: 'New shipment awaiting verification', ...form }, ...current];
      });
      setSelectedId(editingId ?? `SH-${1041 + items.length}`);
      setIsLoading(false);
      showToast({ kind: 'success', title: editingId ? 'Shipment updated' : 'Shipment created', message: 'Tracking timeline is ready.' });
      resetForm();
    }, 650);
  }

  return (
    <div className="split-grid">
      <section className="card table-card">
        <div className="card-heading"><div><h3>Shipment operations</h3><p className="metric">Create, edit, delete, track, and verify inbound shipments.</p></div><span className="status green">Blockchain verified</span></div>
        <form className="module-toolbar" onSubmit={(event) => event.preventDefault()}>
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search shipments" placeholder="Search shipment, vendor, PO, carrier" />
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter shipment status">
            <option>All</option><option>Processing</option><option>In Transit</option><option>Exception</option><option>Verified</option>
          </select>
        </form>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Tracking</th><th>Vendor</th><th>Status</th><th>Risk</th><th>Actions</th></tr></thead>
            <tbody>{filtered.map((item, index) => <tr key={item.id} onClick={() => setSelectedId(item.id)}><td><strong>{item.id}</strong><br /><span className="metric">{makeTrackingId(index)}</span></td><td>{item.vendor}<br /><span className="metric">{item.carrier}</span></td><td><span className="status amber">{item.status}</span></td><td><span className={`status ${badgeClass(item.risk)}`}>{item.risk}</span></td><td><button className="text-button" type="button" onClick={(event) => { event.stopPropagation(); startEdit(item); }}>Edit</button><button className="text-button danger" type="button" onClick={(event) => { event.stopPropagation(); removeShipment(item.id); }}>Delete</button></td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <aside className="card">
        <h3>{editingId ? `Edit ${editingId}` : 'Create shipment'}</h3>
        <form onSubmit={submit}>
          <label className="field">Purchase Order<input value={form.purchaseOrder} onChange={(event) => setForm({ ...form, purchaseOrder: event.target.value })} placeholder="PO-1059" required /></label>
          <label className="field">Vendor<input value={form.vendor} onChange={(event) => setForm({ ...form, vendor: event.target.value })} placeholder="Supplier name" required /></label>
          <label className="field">Carrier<input value={form.carrier} onChange={(event) => setForm({ ...form, carrier: event.target.value })} placeholder="Carrier name" required /></label>
          <label className="field">Warehouse<input value={form.warehouse} onChange={(event) => setForm({ ...form, warehouse: event.target.value })} placeholder="Warehouse" required /></label>
          <label className="field">Expected Arrival<input value={form.expectedArrival} onChange={(event) => setForm({ ...form, expectedArrival: event.target.value })} placeholder="Jul 18, 2026" required /></label>
          <label className="field">Value<input value={form.value} onChange={(event) => setForm({ ...form, value: event.target.value })} placeholder="$24,500" /></label>
          <label className="field">Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as ShipmentForm['status'] })}><option>Processing</option><option>In Transit</option><option>Delivered</option><option>Exception</option><option>Verified</option></select></label>
          <div className="action-grid"><button className="button" disabled={isLoading} type="submit">{isLoading ? 'Saving...' : editingId ? 'Save changes' : 'Create shipment'}</button>{editingId ? <button className="button secondary" type="button" onClick={resetForm}>Cancel</button> : null}</div>
        </form>
        {selected ? <div className="tracking-card"><div className="qr-code" aria-label="Shipment QR code">{Array.from({ length: 25 }).map((_, index) => <span key={index} />)}</div><div><p className="eyebrow">Track shipment</p><h3>{selected.id}</h3><p className="metric">{selected.discrepancy}</p><span className="status green">Chain hash verified</span></div></div> : null}
        {selected ? <div className="timeline"><div className="timeline-item"><span>Created</span><p>{selected.purchaseOrder} linked to vendor</p></div><div className="timeline-item"><span>In transit</span><p>{selected.carrier} assigned tracking ID</p></div><div className="timeline-item"><span>Warehouse</span><p>{selected.warehouse} awaiting/recorded inspection</p></div></div> : null}
      </aside>
    </div>
  );
}
