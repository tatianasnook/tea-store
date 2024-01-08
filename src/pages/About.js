import about from '../about-us.jpg';

const About = () => {
  return (
    <div className='about-section'>
      <h1>Welcome to Tea Land - Elevating Tea Enjoyment to an Art!</h1>
      <div className='wrap'>
        <img src={about} alt='tea cup'/>
      </div>
      
      <p>Welcome to Tea Land, where passion meets perfection in every cup. At Tea Land,
        we take pride in curating the finest selection of premium teas, delivering an exquisite blend of 
        quality and taste to tea enthusiasts around the globe. Our journey began in 2021 with a simple yet
        profound mission – to share the joy of exceptional tea with the world. We believe that tea is not just
        a beverage; it's an experience that transcends time and culture. From the lush tea gardens to your teacup,
        we ensure that every step in the process reflects our commitment to excellence. What sets Tea Land apart 
        is our unwavering dedication to quality. We source only the finest tea leaves, handpicked from the most 
        prestigious gardens, ensuring a cup of tea that is unparalleled in flavor and aroma. Our premium teas 
        are a celebration of nature's bounty, crafted to perfection for your indulgence.
        Tea Land is more than a tea brand; it's a lifestyle choice. We understand the importance of health 
        and well-being, which is why all our teas are gluten-free and packed with natural goodness. 
        Immerse yourself in the world of Tea Land, where every sip is a journey to relaxation and revitalization.
        Join us in savoring the richness of tradition and the innovation of modern tea culture. At Tea Land, 
        we invite you to explore a world of extraordinary flavors, where each tea tells a unique story. 
        Elevate your tea-drinking experience with us – because you deserve nothing but the best.
        Indulge in the art of tea at Tea Land, where passion, purity, and premium quality converge in every teacup.
      </p>
      <h3>Why Choose Tea Land?</h3>
        <ul>
          <li><b>Premium Quality:</b> Only the finest teas from renowned global gardens.</li>
          <li><b>Diverse Selection:</b> Explore classic favorites and unique, rare blends.</li>
          <li><b>Convenient Shopping:</b> At Tea Land, we believe in making your tea experience as delightful 
            as the blends we offer. Whether you prefer the convenience of ordering 
            online or the charm of in-person shopping.
          </li>
        </ul>
    </div>
  )
}

export default About;