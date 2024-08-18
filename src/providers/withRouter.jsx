import { BrowserRouter } from "react-router-dom";

export default function WithRouter({ children }) {
  return (
    <BrowserRouter basename="/">
        {children}
    </BrowserRouter>
  );
}
