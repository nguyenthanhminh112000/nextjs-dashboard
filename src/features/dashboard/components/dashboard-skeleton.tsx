import { shimmer } from '@features/dashboard/styles/loading-animation';
import { CardSkeleton } from '@features/dashboard/components/card-skeleton';
import { RevenueChartSkeleton } from '@features/dashboard/components/revenue-chart-skeleton';
import { LatestInvoicesSkeleton } from '@features/dashboard/components/latest-invoices-skeleton';

export function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
