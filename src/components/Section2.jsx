import Container from './Container';
import './Section2.css';
import Sliderslist from './Sliderslist';
import Slider from './Slider';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { useInView } from 'react-intersection-observer';

export default function Section2() {
  const { ref, inView } = useInView({
    threshold: 1,
    // rootMargin: 10,
    // triggerOnce: true,
    // root:
  });

  return (
    <div className='section2'>
      <div className={inView ? 'one' : 'one sticky'}>
        <Container>BOOOKS IS THE PLACE FOR READERS TO GATHER</Container>
      </div>

      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure
        iusto ipsam, et cupiditate minima! Architecto incidunt consectetur,
        earum, voluptatem aperiam reiciendis facere eaque rem eos iste nemo
        provitque obcaecati, suscipit velit aliquam officiis minima voluptatum
        officia iure esse! Consequuntur similique aut aliquam impedit veniam
        obcaecati possimus. Odit repellendus porro nesciunt minima ea earum.
        Quaerat quae quo ratione. Eligendi est quia ipsa asperiores. */}

      <div className='two' ref={ref}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
        deserunt maiores! Temporibus repellat magnam eveniet iste voluptatem
        incidunt labore suscipit neque ipsa rerum. Veritatis, cumque! Corporis
        voluptatum quae, vitae facere alias corrupti totam hic ipsum ab numquam
        similique officia distinctio ad accusantium mollitia, vero repellendus
        rem deserunt animi magni repudiandae optio ipsam! Ipsam animi
        consequatur assumenda reprehenderit optio et dolores eaque inventore
        maiores? Cum aspernatur non beatae voluptatibus labore obcaecati alias
        voluptatem molestiae. Officia earum dolore nesciunt, cum autem fuga ab
        odit! Ad mollitia eum dolorem ipsum porro nobis, delectus, expedita
        quae, quam consectetur voluptatem quasi amet nemo eaque at suscipit unde
        non harum magni beatae cupiditate possimus! Dignissimos nisi eum
        doloribus facere maiores, aut, voluptatum accusamus officia esse saepe,
        odit suscipit soluta. At dolores non aspernatur corrupti iste quo fugit
        minima deleniti, dolorum sit impedit distinctio, repellat velit, hic
        consectetur consequatur. Fugiat, dolorum quasi nobis, praesentium
        aliquam blanditiis nam, dolores eaque beatae quam tempore accusantium
        voluptas voluptatibus recusandae. Facere quia obcaecati voluptatum
        similique autem. Voluptas nam quia nostrum. Explicabo quibusdam magnam
        dolorum ad quaerat hic ipsam dolor veritatis nulla temporibus culpa
        voluptates libero labore unde, eius doloribus velit, accusantium
        assumenda asperiores alias obcaecati? Obcaecati, soluta. Facere, dolores
        officiis! */}
        <Sliderslist>
          <Slider
            imageSrc={img1}
            title='The impossible navigator'
            subtitle='Learn about Chinese science-fiction writer Cixin Liu, whose "The Three-Body Problem" trilogy was adapted into a TV series.'
          />
          <Slider
            flipped
            imageSrc={img2}
            title='Community libraries'
            subtitle='
View the list of associated community libraries and choose the one closest to you.'
          />
          <Slider
            imageSrc={img1}
            title='The impossible navigator'
            subtitle='Learn about Chinese science-fiction writer Cixin Liu, whose "The Three-Body Problem" trilogy was adapted into a TV series.'
          />
          <Slider
            flipped
            imageSrc={img2}
            title='Community libraries'
            subtitle='
View the list of associated community libraries and choose the one closest to you.'
          />
        </Sliderslist>
      </div>
    </div>
  );
}
