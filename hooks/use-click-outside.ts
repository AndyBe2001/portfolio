import React, { useEffect } from "react";

export const useClickOutside = <T>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as unknown as HTMLElement).contains(event.target as Node)
      ) {
        callback(event);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
};
