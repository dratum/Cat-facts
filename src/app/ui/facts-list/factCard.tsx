export default function FactCard({
  fact,
  num,
  currentPage,
}: {
  num: number;
  fact: string;
  currentPage: number;
}) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <p>Fact № {`${num + 1 + (currentPage - 1) * 10}`}</p>
      <p>{fact}</p>
    </div>
  );
}
