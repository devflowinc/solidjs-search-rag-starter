/* eslint-disable solid/no-innerhtml */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEffect, createSignal, For, onCleanup } from "solid-js";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ShowToast from "../components/ShowToast";

const getYouTubeThumbnail = (url: string) => {
  console.log("url: ", url);

  const videoId = url.split("v=")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const getLongestSectionByNewline = (text: string) => {
  const sections = text.split("\n");
  let longestSection = "";
  sections.forEach((section) => {
    if (section.length > longestSection.length) {
      longestSection = section;
    }
  });

  const words = longestSection.split(" ");
  if (words.length > 100) {
    return words.slice(0, 100).join(" ") + "...";
  }

  return longestSection;
};

export const SearchPage = () => {
  const trieveApiKey = import.meta.env.VITE_TRIEVE_API_KEY as string;
  const trieveDatasetId = import.meta.env.VITE_TRIEVE_DATASET_ID as string;

  const [searchReqPayload, setSearchReqPayload] = createSignal<any>({
    query: "",
    search_type: "fulltext",
    highlight_options: {
      highlight_strategy: "exactmatch",
      highlight_max_num: 50,
    },
  });
  const [scoreChunks, setScoreChunks] = createSignal<any[]>([]);

  createEffect(() => {
    console.log("results changed to: ", scoreChunks());
  });

  createEffect(() => {
    const curSearchReqPayload = searchReqPayload();
    const abortController = new AbortController();
    fetch("https://api.trieve.ai/api/chunk/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: trieveApiKey,
        "TR-Dataset": trieveDatasetId,
        "X-API-Version": "V2",
      },
      body: JSON.stringify(curSearchReqPayload),
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        const resChunks = data.chunks;
        if (resChunks && resChunks.length > 0) {
          setScoreChunks(resChunks);
        }
      })
      .catch((err) => {
        console.error("Error fetching search results: ", err);
      });

    onCleanup(() => {
      abortController.abort("cleanup search");
    });
  });

  return (
    <div>
      <Header />
      <div class="w-full bg-stone-100 p-2">
        <div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-y-4 py-12">
          <input
            type="text"
            class="w-full rounded-md border border-stone-200 p-2 drop-shadow-sm"
            placeholder="Search"
            onInput={(e) =>
              setSearchReqPayload((prev) => ({
                ...prev,
                query: (e.target as HTMLInputElement).value,
              }))
            }
            value={searchReqPayload().query as string}
          />
          <div class="flex flex-wrap justify-between gap-3">
            <For each={scoreChunks()}>
              {(score_chunk) => (
                <div class="flex w-[30%] max-w-lg flex-col gap-2 rounded-lg border border-stone-300 p-3">
                  <img
                    class="rounded-md"
                    src={getYouTubeThumbnail(score_chunk.chunk.link ?? "")}
                  />
                  <p
                    innerHTML={getLongestSectionByNewline(
                      score_chunk.chunk.chunk_html ?? "",
                    )}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <Footer />
      <ShowToast />
    </div>
  );
};
