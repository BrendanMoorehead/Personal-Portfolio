import { useRef } from 'react';
import { useInView } from 'framer-motion';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-in 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  );
}
export default Section;
