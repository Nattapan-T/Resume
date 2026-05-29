import { useEffect, useState } from "react";

interface UseTypingEffectOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseBeforeDelete?: number;
}

interface UseTypingEffectReturn {
  displayed: string;
  isDeleting: boolean;
  currentIndex: number;
}

/**
 * Cycles through an array of strings with a typewriter effect.
 *
 * @param texts - Array of strings to cycle through
 * @param options - Speed and timing configuration
 * @returns `displayed` — the current partial string to render
 *
 * @example
 * const { displayed } = useTypingEffect(["Frontend Engineer", "React Developer"])
 */
const useTypingEffect = (
  texts: string[],
  {
    typeSpeed = 70,
    deleteSpeed = 35,
    pauseBeforeDelete = 2000,
  }: UseTypingEffectOptions = {},
): UseTypingEffectReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const current = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      // Still typing
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typeSpeed,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      // Finished typing — pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && displayed.length > 0) {
      // Still deleting
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        deleteSpeed,
      );
    } else {
      // Finished deleting — move to next text
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    currentIndex,
    texts,
    typeSpeed,
    deleteSpeed,
    pauseBeforeDelete,
  ]);

  return { displayed, isDeleting, currentIndex };
};

export default useTypingEffect;
