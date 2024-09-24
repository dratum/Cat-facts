"use client";
import FactsList from "./ui/facts-list/list";
import { useCatFacts, useCatRandomFact } from "@/app/lib/actions";
import Pagination from "./ui/facts-list/pagination";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, mutate: mutateFacts } = useCatFacts(page);
  const {
    data: randomFact,
    mutate: Random,
    isLoading: isLoadingRandomFact,
  } = useCatRandomFact();

  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setPage(page);
    mutateFacts();
  };

  const getNewFact = () => {
    Random(); // Перезапрашивает новый факт
  };

  return (
    <div className='grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='text-4xl font-bold'>Cat Facts</h1>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-lg'>Random cat fact</h2>
          <p>{isLoadingRandomFact ? "Loading..." : randomFact?.fact}</p>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
            onClick={getNewFact}
          >
            Get Fact
          </button>
        </div>

        <FactsList fetchData={data} isLoading={isLoading} currentPage={page}/>
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
