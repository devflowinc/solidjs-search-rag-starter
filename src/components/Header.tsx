export default function Header() {
  return (
    <header class="flex justify-center bg-white p-2">
      <div class="flex w-full max-w-screen-2xl items-center">
        <a class="flex items-center" href="/">
          <p class="pr-2">
            <img
              src="https://cdn.trieve.ai/trieve-logo.png"
              alt="Trieve Logo"
              class="h-14 w-14 border border-white"
            />
          </p>
          <p class="text-lg">SolidJS Search and RAG starter</p>
        </a>
        <div class="flex-1" />
        <a href="/">Search</a>
      </div>
    </header>
  );
}
