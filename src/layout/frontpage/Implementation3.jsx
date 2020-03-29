import React from 'react';
import '../../css/frontpage/implementation3.css'
import img34 from '../../assets/thumbnails/34.jpg'
import img35 from '../../assets/thumbnails/35.jpg'
import img36 from '../../assets/thumbnails/36.jpg'

const Implementation3 = () => {
  return (
    <>
    <div className="implementation3">
<div className="div1" data-aos="fade-up"> <h1>Esotiq</h1> </div>
<div className="div2" data-aos="fade-up"> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi expedita labore aliquam quidem commodi officiis suscipit. Illum possimus recusandae corrupti officiis corporis ad laborum eligendi fugit, accusamus, esse beatae reprehenderit, minus obcaecati cupiditate at placeat dicta. Illum velit ratione, fugiat eligendi quibusdam, maiores quis, quidem saepe aliquam consequuntur sit distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat inventore necessitatibus magni sint. Consectetur accusantium soluta odio possimus natus. </p></div>
<div className="div3">  <h4 className="sideText">Esotiq</h4>  <img src={img34} alt="" data-aos="fade-right" className="img"/> </div>
<div className="div4">  <h4 className="sideText">Esotiq</h4>  <img src={img35} alt="" data-aos="fade-left"  className="img"/>  </div>

</div>
<img className="img" src={img36} alt=""/>
</>
  )
};

export default Implementation3;
