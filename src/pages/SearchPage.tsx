import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ShowToast from "../components/ShowToast";

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
    <div>
      <Header />
      <div class="bg-stone-100">Hello World</div>
      <Footer />
      <ShowToast />
    </div>
  );
};
