import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `count value ${count}`;
  }, [count]);
}

export default useDocumentTitle;
