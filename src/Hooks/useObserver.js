import { useEffect, useState, useRef } from "react";

export default function useObserver({ reference, once = true }) {
  const [show, setShow] = useState(false);
  const refForm = useRef();
  const element = reference ? reference.current : refForm.current;
  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false)
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "100px",
      });
      if (element) observer.observe(element);
    });
    return () => observer && observer.disconnect();
  });
  return {
    show,
  };
}
