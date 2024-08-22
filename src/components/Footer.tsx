import { BsLinkedin } from "solid-icons/bs";

export const Footer = () => {
  return (
    <footer class="flex justify-center bg-white p-2">
      <div class="w-full max-w-screen-2xl items-center">
        <a class="flex items-center py-2" href="/">
          <p class="pr-2">
            <img
              src="https://cdn.trieve.ai/trieve-logo.png"
              alt="Trieve Logo"
              class="h-14 w-14 border border-white"
            />
          </p>
          <p class="text-lg">SolidJS Search and RAG starter</p>
        </a>
        <div class="flex h-0.5 w-full bg-stone-100" />
        <div class="flex w-full items-center gap-x-2 py-2">
          <a href="https://x.com/trieve.ai">𝕏</a>
          <a href="https://www.linkedin.com/company/trieveai">
            <BsLinkedin />
          </a>
          <div class="flex-1" />
        </div>
      </div>
    </footer>
  );
};
