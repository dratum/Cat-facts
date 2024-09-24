import FactCard from "./factCard";
import { Facts, Fact } from "@/app/lib/types";

function FactsList({
  fetchData,
  isLoading,
  currentPage,
}: {
  fetchData: Facts;
  isLoading: boolean;
  currentPage: number;
}) {
  return (
    <div>
      <h1>Facts List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          fetchData?.data.map((fact: Fact, index: number) => (
            <FactCard
              key={index}
              num={index}
              fact={fact.fact}
              currentPage={currentPage}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FactsList;
