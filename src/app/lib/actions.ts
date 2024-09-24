import useSWR from "swr";
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }
  return res.json();
};
export const useCatRandomFact = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "https://catfact.ninja/fact",
    fetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isLoading, mutate };
};

export function useCatFacts(query: number) {
  const { data, error, isLoading, mutate } = useSWR(
    `https://catfact.ninja/facts?page=${query}`,
    fetcher
  );
  return { data, error, isLoading, mutate };
}
