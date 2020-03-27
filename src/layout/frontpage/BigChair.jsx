import React from 'react';
import img21 from '../../assets/thumbnails/21.jpg';
import '../../css/frontpage/BigChair.css';

const BigChair = () => {
  return (
    <div class='chair'>
      <div class='div1'>
        <img src={img21} alt='' />
      </div>
      <div class='div2'>
        <h1 className='white'>Najlepsza jakość</h1>
      </div>
      <div class='div3'>
        <p className='white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius
          tempore adipisci quidem repellat animi, doloremque aperiam dolorem
          nisi explicabo exercitationem, eum ex, rem ut! Atque unde at ullam
          excepturi? Necessitatibus reprehenderit corporis, quam est quod
          ratione nesciunt sint delectus atque, quaerat aspernatur fugit aut
          minima in voluptas, voluptatibus vel ullam repellat voluptatem sequi
          placeat! Odit sed sapiente hic vel! Necessitatibus nemo maiores quia
        </p>
      </div>
    </div>
  );
};

export default BigChair;
