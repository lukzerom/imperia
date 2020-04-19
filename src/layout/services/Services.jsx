import React from "react";
import "../../css/services.css";
import startup from "../../assets/thumbnails/startup.jpg";
import img26 from "../../assets/thumbnails/26.jpg";
import rysunek from "../../assets/thumbnails/rysunek.jpg";

const Services = () => {
  return (
    <div className="wrapper-mobile">
      <div className="services">
        <div className="div1" data-aos="fade-up">
          <h1>Analiza potrzeb</h1>
        </div>
        <div className="div2" data-aos="fade-up">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            et iste tenetur molestiae vero vitae minima qui facere nisi
            molestias facilis placeat quidem accusamus numquam veniam,
            recusandae quisquam veritatis soluta.
          </p>
        </div>
        <div className="div3" data-aos="fade-left">
          <img src={startup} className="img" alt="" />
        </div>

        <div className="div5  bg-grey" data-aos="fade-left"></div>
        <div className="div6">
          <h1 className="white" data-aos="fade-left">
            Projektowanie koncepcyjne
          </h1>
        </div>
        <div className="div7">
          <p className="white" data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            dignissimos maiores natus deserunt aut corrupti accusantium fugiat
            accusamus doloremque fuga. Optio omnis amet odit? Voluptates magni
            in voluptatibus quo quos. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Modi est minus iusto delectus ex, doloremque
            accusantium eos ad ipsa numquam fugiat voluptates nostrum nobis
            repudiandae, deleniti necessitatibus beatae itaque nisi! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. A non blanditiis
            accusamus eveniet quia culpa natus facilis eos consequatur rerum,
            aperiam quas unde maiores repellat officia itaque quidem corporis
            labore?
          </p>
        </div>
        <div className="div4">
          <img src={img26} className="img" alt="" data-aos="fade-right" />
        </div>
        <div className="div8" data-aos="fade-up">
          <h1>Montaż i serwis</h1>{" "}
        </div>
        <div className="div9" data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            qui beatae exercitationem. Recusandae cupiditate, dolore est ea
            aliquam quae neque reprehenderit sed quod officiis excepturi atque.
            Fuga optio vero repudiandae!Ullam eligendi autem in adipisci ex
            suscipit delectus eum, hic laboriosam totam? Sint, ullam dignissimos
            adipisci, dolorum quas cum officia natus facere nobis vitae
            exercitationem unde? Molestiae voluptate vel natus?
          </p>
        </div>
        <div className="div10" data-aos="fade-up">
          <h1>Testowanie</h1>
        </div>
        <div className="div11" data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iusto nobis quaerat error corrupti mollitia! Error nulla culpa
            harum, dolorem voluptatibus libero, dolores cupiditate quisquam
            corrupti, excepturi molestiae facere fugiat!Cum dignissimos
            architecto, ipsam mollitia aut obcaecati quae ex porro quod repellat
            optio, earum sit. Facere deserunt quis sapiente porro nihil sunt
            iste quam, tenetur debitis eaque ipsum? Corporis, ex!
          </p>
        </div>
        <div className="div12 darkblue"></div>
        <div className="div13">
          <h1 className="white" data-aos="fade-up">
            Inwentaryzacja mebli
          </h1>
        </div>
        <div className="div14">
          <p className="white" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            suscipit illo in, ab, doloremque possimus commodi atque quibusdam a,
            nam eos sapiente illum rerum velit! Perspiciatis error ipsa deserunt
            facilis?
          </p>
        </div>
        <div className="div15" data-aos="fade-up">
          <img src={rysunek} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Services;
