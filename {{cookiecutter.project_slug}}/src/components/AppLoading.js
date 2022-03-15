import { useAuth } from "../hooks/AuthProvider";

export default function AppLoading({ children }) {
  const auth = useAuth();

  if (auth.user === undefined) {
    return <div>App loading...</div>;
  }

  return children;
}
