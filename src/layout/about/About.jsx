import React from "react";
import bojka from "../../assets/thumbnails/bojka.jpg";

const About = () => {
  return (
    <div>
      <div className="wrapper" data-aos="fade-up">
        <div className="two-columns-flex">
          <div className="half">
            <h1>O nas</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              officiis tenetur deleniti ipsam excepturi repudiandae rem natus,
              placeat vero nesciunt error reprehenderit! Cumque, laudantium sunt
              assumenda dolorum nesciunt nobis molestias!Lorem Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Unde, ducimus iste ea
              iusto voluptatem quae molestiae, quis dolor iure nobis omnis ipsum
              qui sunt est! Eum nisi molestias hic tempora. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quasi tenetur eos, aliquam
              neque ipsa aut alias, voluptatem est illum eaque velit. Fugiat
              dicta tempore eaque, obcaecati in quisquam eligendi quae.
            </p>
          </div>
          <img src={bojka} alt="" className="half" />
        </div>
      </div>
    </div>
  );
};

export default About;
