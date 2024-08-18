import PrimotyButton from "components/shared/primotyButton/primotyButton";

export default function P404() {
  return (
    <div className="w-full flex-col content-center items-center justify-center bg-white dark:bg-editor-dark">
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] bg-opacity-10">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <PrimotyButton text="home" url="/" />
          </a>
        </button>
      </main>
    </div>
  );
}
