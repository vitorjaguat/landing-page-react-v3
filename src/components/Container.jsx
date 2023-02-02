import './Container.css';
import { useInView } from 'react-intersection-observer';

export default function Container({ children }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className={inView ? 'container visible' : 'container'} ref={ref}>
      <div className='box'>{children}</div>
    </div>
  );
}
