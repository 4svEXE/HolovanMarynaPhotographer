import WithRouter from "./withRouter";
import WithLayout from "./withLayout";

export function ConnectProwiders({ children }) {
  return (
    <WithRouter>
      <WithLayout children={children} />
    </WithRouter>
  );
}
