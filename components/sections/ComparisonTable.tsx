interface ComparisonTableProps {
  headers: string[];
  rows: { feature: string; values: string[] }[];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <table className="w-full min-w-[600px] border-collapse text-sm">
        <thead>
          <tr className="bg-navy-900 text-white">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-3 text-left font-semibold first:rounded-tl-lg last:rounded-tr-lg"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <th scope="row" className="px-4 py-3 font-medium text-navy-900 text-left border-b border-slate-200">
                {row.feature}
              </th>
              {row.values.map((value, j) => (
                <td key={j} className="px-4 py-3 text-slate-600 border-b border-slate-200">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface SpecsTableProps {
  specs: { label: string; value: string }[];
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
      {specs.map((spec) => (
        <div key={spec.label} className="border-b border-slate-200 pb-3">
          <dt className="text-sm font-medium text-slate-500">{spec.label}</dt>
          <dd className="mt-1 text-navy-900 font-medium">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DecisionGuide({
  items,
}: {
  items: { title: string; description: string; recommendation: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.title} className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600 mb-4">{item.description}</p>
          <p className="text-sm">
            <span className="font-medium text-amber-600">Recommended: </span>
            <span className="text-navy-900 font-semibold">{item.recommendation}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-navy-900 transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-navy-900 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
