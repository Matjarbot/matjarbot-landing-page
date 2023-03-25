import { useEffect, useState } from "react";

function useOutSide(refs: Array<any>, callback: any) {
  const [contains, setContains] = useState([false]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      refs.forEach((ref: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setContains([...contains, true]);
        } else {
          setContains([...contains, false]);
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);
  useEffect(() => {
    if (contains.includes(true)) {
      setTimeout(() => {
        callback();
      }, 200);
      setContains([false]);
    }
  }, [contains]);
}
export default useOutSide;
