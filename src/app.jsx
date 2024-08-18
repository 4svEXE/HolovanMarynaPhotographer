import { Suspense } from "react";
import Routes from "pages/routes";

export default function App({ toggleTheme }) {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Routes />
      </Suspense>
    </>
  );
}
