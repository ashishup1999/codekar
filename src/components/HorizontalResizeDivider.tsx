import { useEffect, useRef } from "react";
import styled from "styled-components";

export const Divider = styled.div`
  position: absolute;
  background-color: #9a9898;
  border-radius: 5px;
  height: 97%;
  width: 5px;
  cursor: col-resize;
`;

const HorizontalResizeDivider = ({
  left,
  min,
  max,
  onResize,
  windowRef,
}: {
  left: number;
  min?: number;
  max?: number;
  onResize: (currLeft: number) => void;
  windowRef: any;
}) => {
  const currPos = useRef(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onResize(left);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onMouseDown(e: any) {
      requestAnimationFrame(() => {
        if (dividerRef.current && e.target === dividerRef.current) {
          currPos.current = e.clientX;
        }
        // Disable iframes during drag
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => (iframe.style.pointerEvents = "none"));
      });
    }

    function onMouseMove(e: any) {
      requestAnimationFrame(() => {
        e.preventDefault();
        if (currPos.current && dividerRef.current) {
          const newLeft = Math.ceil(
            left +
              Math.floor((e.clientX - currPos.current) * 100) /
                windowRef.current.offsetWidth
          );
          if ((min && newLeft < min) || (max && newLeft > max)) return;
          dividerRef.current.style.left = newLeft + "%";
          onResize(newLeft);
        }
      });
    }

    function onMouseUp() {
      requestAnimationFrame(() => {
        currPos.current = null;
      });
    }

    (() => {
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    })();
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left]);
  return <Divider ref={dividerRef} style={{ left: `${left}%` }} />;
};

export default HorizontalResizeDivider;
