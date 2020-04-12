import React from 'react';
import '../../css/frontpage/TopColumns.css';
import img16 from '../../assets/thumbnails/16.jpg';

const TopColumns = () => {
  return (
    <div className='parent'>
      <div className='div1'>
        <img src={img16} data-aos="fade-left" alt='' />
      </div>
      <div className='div2  h1-container' data-aos="fade-up">
        <h1>Projektowanie wnętrz</h1>
      </div>
      <div className='div3 two-columns-large' data-aos="fade-up">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          inventore non doloribus fugit a doloremque quidem earum, ipsa quisquam
          vitae iure? Reprehenderit, dolor. Ex quisquam quidem culpa tempore, a
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          inventore non doloribus fugit a doloremque quidem earum, ipsa quisquam
          vitae iure? Reprehenderit, dolor. Ex quisquam quidem culpa tempore, a
        </p>
      </div>
      <div className='div4' data-aos="fade-up" >
        
      </div>
      <div  className='div5  h1-container' data-aos="fade-up">
        <h1>Kompleksowa obsługa</h1>
      </div>
      <div className='div6 two-columns-large' data-aos="fade-up">
        <p >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          inventore non doloribus fugit a doloremque quidem earum, ipsa quisquam
          vitae iure? Reprehenderit, dolor. Ex quisquam quidem culpa tempore, a
          Lorem ipsum dolor sit amet, consectetur adipisic 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          inventore non doloribus fugit a doloremque quidem earum, ipsa quisquam
          vitae iure? Reprehenderit, dolor. Ex quisquam quidem culpa tempore, a
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          magni quam 
        </p>
      </div>
    
      <div className='div8'> </div>
      <div className='div9'> </div>
      <div className='div10  h1-container' data-aos="fade-up">
        <h1>Skandynawski design</h1>
      </div>
      <div className='div11' data-aos="fade-up">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          inventore non doloribus fugit a doloremque quidem earum, ipsa quisquam
          vitae iure? Reprehenderit, dolor. Ex quisquam quidem culpa tempore, a
          Lorem ipsum dolor sit am
        </p>
      </div>
      <div className='div12'> </div>
    </div>
  );
};

export default TopColumns;
