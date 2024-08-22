import { Footer } from "../components/Footer";

const defaultScoreThreshold = (searchType: string): number => {
  switch (searchType) {
    case "semantic":
      return 0.5;
    case "hybrid":
      return 0.01;
    case "fulltext":
      return 5;
    default:
      return 0.3;
  }
};

export const SearchPage = () => {
  const trieveApiKey = import.meta.env.VITE_TRIEVE_API_KEY as string;
  const trieveBaseURL = import.meta.env.VITE_TRIEVE_API_URL as string;
  const trieveDatasetId = import.meta.env.VITE_TRIEVE_DATASET_ID as string;

  return (
    <>
      <main class="mx-auto bg-[#F6F6F0] font-verdana text-[13.33px] sm:bg-hn md:m-2 md:mx-auto md:w-[85%]">
        Hello World
        <Footer />
      </main>
    </>
  );
};
