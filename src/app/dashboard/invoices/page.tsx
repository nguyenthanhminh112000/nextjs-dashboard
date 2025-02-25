import { Pagination } from '@shared/components/pagination';
import { Search } from '@shared/components/search';
import { InvoicesTable } from '@features/dashboard/components/invoices-table';
import { CreateInvoiceButton } from '@features/dashboard/components/create-invoice-button';
import { lusitana } from '@shared/assets/font/lusitana';
import { InvoicesTableSkeleton } from '@features/dashboard/components/invoices-table-skeleton';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@features/dashboard/database/invoice';

type InvoicesPageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export default async function InvoicesPage({
  searchParams,
}: InvoicesPageProps) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoiceButton />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
