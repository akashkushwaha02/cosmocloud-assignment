import { useState } from "react";
import Accordion from "./components/Accordion";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import explorer from "./data/Data";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isObject) => {
    const finalTree = insertNode(explorerData, folderId, item, isObject);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      File name and type
      <Accordion handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
