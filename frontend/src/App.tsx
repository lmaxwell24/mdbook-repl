import { lazy } from "react";
import { useAppContext } from "@/contexts/AppProvider";

const Editor = lazy(() => import("@/components/Editor/Editor"));
const Output = lazy(() => import("@/components/Output/Output"));
const Input = lazy(() => import("@/components/Input/Input"));

export default function App() {
  const { isFullscreen } = useAppContext();

  return (
    <main data-fullscreen={isFullscreen}>
      <Editor />
      <Output />
      <Input />
    </main>
  );
}
