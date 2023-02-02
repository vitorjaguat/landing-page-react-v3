import './ContainerFloat.css';
import { useInView } from 'react-intersection-observer';

export default function ContainerFloat({ children, linkInView }) {
  // console.log(linkInView);
  return (
    <div className={linkInView ? 'container-float' : 'container-float sticky'}>
      <div className='box'>{children}</div>
    </div>
  );
}
