import React from 'react';
import '../../css/frontpage/implementation1.css'
import img29 from '../../assets/thumbnails/29.jpg'
import img31 from '../../assets/thumbnails/31.jpg'
import img32 from '../../assets/thumbnails/32.jpg'

const Implementation1 = () => {
  return (<div className="implementation1">
  <div className="div1 darkblue"> </div>
  <div className="div2"  data-aos="fade-up"> <h1>Kupper glass</h1>  </div>
  <div className="div3"  data-aos="fade-up"> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellat dolor harum assumenda! Officia, asperiores, veritatis accusantium dolorum omnis itaque ullam eum explicabo enim ad libero delectus illum reprehenderit architecto?
  Vero delectus corporis suscipit soluta fugiat repudiandae voluptatibus harum, mollitia temporibus hic obcaecati, doloribus accusantium non! Inventore minus, vitae voluptate cum, nostrum culpa perspiciatis provident officiis distinctio ipsa ab reprehenderit.
  Adipisci repellendue</p> </div>
  <div className="div4">  <h4 className="sideText" >Kupper Glass</h4> <img className="img" data-aos="fade-left" src={img29} alt=""/> </div>
  <div className="div5">  <h4 className="sideText">Kupper Glass</h4> <img className="img" data-aos="fade-right" src={img31} alt=""/> </div>
  <div className="div6 darkblue"> </div>
  <div className="div7">  <h4 className="sideText">Kupper Glass</h4> <img className="img"  data-aos="fade-left" src={img32} alt=""/> </div>
  </div>);
};

export default Implementation1;
