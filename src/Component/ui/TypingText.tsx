import useTypingEffect from "../../hooks/useTypingEffect";

interface TypingTextProps {
  texts: string[];
  className?: string;
}

/**
 * Renders a typewriter cycling animation.
 * Visually animated text is hidden from screen readers via aria-hidden.
 * Use alongside an aria-live region in the parent for accessibility.
 *
 * @example
 * <TypingText texts={["Frontend Engineer", "React Developer"]} />
 */
const TypingText = ({ texts, className = "" }: TypingTextProps) => {
  const { displayed } = useTypingEffect(texts);

  return (
    <span aria-hidden="true" className={className}>
      <span className="text-amber-400">{displayed}</span>
      <span className="animate-pulse text-amber-400">|</span>
    </span>
  );
};

export default TypingText;
