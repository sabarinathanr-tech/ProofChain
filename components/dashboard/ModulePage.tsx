import { PageHeader } from '@/components/common/PageHeader';

type CellValue = string | number | boolean;
type Column<T> = { key: keyof T; label: string };

type ModulePageProps<T extends Record<string, CellValue>> = {
  title: string;
  description: string;
  actionLabel: string;
  columns: Column<T>[];
  rows: T[];
  children?: React.ReactNode;
};

function formatCell(value: CellValue) {
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return value;
}

export function ModulePage<T extends Record<string, CellValue>>({ title, description, actionLabel, columns, rows, children }: ModulePageProps<T>) {
  return (
    <>
      <PageHeader title={title} description={description} action={<button className="button">{actionLabel}</button>} />
      {children}
      <div className="card table-card">
        <div className="module-toolbar">
          <input aria-label={`Search ${title}`} placeholder={`Search ${title.toLowerCase()}`} />
          <select aria-label="Filter status" defaultValue="all">
            <option value="all">All statuses</option>
            <option value="Exception">Exceptions</option>
            <option value="Processing">Processing</option>
            <option value="Verified">Verified</option>
          </select>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead><tr>{columns.map((column) => <th key={String(column.key)}>{column.label}</th>)}</tr></thead>
            <tbody>{rows.map((row, index) => <tr key={String(row.id ?? index)}>{columns.map((column) => <td key={String(column.key)}>{formatCell(row[column.key])}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
