import { useState } from "react";
import "./App.css";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { Element, Link } from "react-scroll";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: 41.39766667479885,
  lng: 2.154041398368338,
};

const positionCITICS = {
  lat: 41.39766667479885,
  lng: 2.154041398368338,
};

const markerLabelCITICS = {
  color: "white",
  fontFamiliy: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
};

const divStyle = {
  background: "white",
  fontSize: 12,
  fontWeight: "bold",
};

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200 font-serif">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-3 md:mb-0">
            <div className="flex justify-center items-center">
              <img
                src="./img/logo-icon.png"
                alt="image of logo"
                className="w-12 pb-5 mt-4"
              />
              <span className="text-xl ml-3">Izawa Acupunctura Japonesa</span>
            </div>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="About" className="mr-5 hover:text-blue-400 duration-300">
              <Link to="about" smooth={true} duration={500}>
                Sobre
              </Link>
            </a>
            <a
              href="Treatment"
              className="mr-5 hover:text-blue-400 duration-300"
            >
              <Link to="treatments" smooth={true} duration={500}>
                Tratamiento
              </Link>
            </a>
            <a href="contact" className=" hover:text-blue-400 duration-300">
              <Link to="contact" smooth={true} duration={500}>
                Contacto
              </Link>
            </a>
          </nav>
        </div>
      </header>
      {/* Main */}
      <section className="text-gray-700 id=home">
        <div className="flex container mx-auto py-10 sm:py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hola!
              <br />
              Soy Ryo,
              <br />
              Acupunturista Japonesa
            </h1>
            <p className="mb-8 leading-relaxed text-lg italic text-slate-500 font-serif">
              No sólo quiero que los pacientes mejoren y se recuperen de los
              problemas que les aquejan,
              <br />
              sino que también es importante para mí que se sientan relajados y
              a gusto durante los tratamientos.
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              <a
                href="contact"
                className=" hover:text-blue-400 duration-300 font-serif"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="shadow-xl"
                >
                  Contacto
                </Link>
              </a>
            </button>
          </div>
          <div className="md:ml-6 md:w-1/2 lg:max-w-lg w-2/3">
            <img src="./img/Ryo_profile_image.jpg" alt="image of the owner" />
          </div>
        </div>
      </section>
      {/* About Me */}

      <section className="text-gray-700 border-t border-gray-200 font-serif">
        <div className="container px-5 py-24 mx-auto bg-slate-50">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              <section id="about">
                <Element name="about">Sobre Ryo</Element>
              </section>
            </h1>
            <div className="pb-10"></div>
            <div className="text-lg font-medium">
              <div className="text-2xl">
                Hari-kyu Acupuntura y moxibustión japonesas
              </div>
              <div className="text-2xl">
                Ontake Trabajo corporal con bambú caliente
              </div>
              <div className="text-2xl mb-4">Masaje japonés shiatsu</div>
              <div className="text-2xl mb-4 font-bold text-green-500">
                Especializado en el alivio del dolor y la gestión del estrés.
              </div>
              <div className="text-lg italic text-gray-500 break-normal">
                - La acupuntura japonesa es suave, cómoda y eficaz, y trata una
                gran variedad de problemas de salud,
                <br />
                desde el dolor físico hasta los problemas mentales y
                emocionales.
              </div>
              <div className="text-gray-500 mt-2">
                -Me formé con expertos en acupuntura japonesa en Japón, Portugal
                y Malasia,
                <br />
                estudiando los métodos japoneses más suaves, incluido el bambú
                caliente Ontake para aliviar el dolor.
              </div>
            </div>
            <div className="text-xl font-medium mt-14">
              <div className="text-2xl">
                Hari-kyu Japanese acupuncture and moxibustion
              </div>
              <div className="text-2xl">Ontake Warm bamboo bodywork</div>
              <div className="text-2xl">Shiatsu Japanese massage</div>
            </div>
            <div className="text-2xl font-bold mt-3 mb-5 text-green-500">
              Specialising in pain relief and stress management.
            </div>
            <div className="text-lg italic text-gray-500">
              I not only want patients to improve and recover from the issues
              that trouble them,
              <br />
              but it’s also important to me that they feel relaxed and at ease
              during their treatments.
              <div className="mt-3">
                Japanese acupuncture is gentle, comfortable and effective,
                <br />
                treating a variety of health issues from physical pain to mental
                and emotional problems.
              </div>
              <div className="mt-3">
                I trained with Japanese acupuncture experts in Japan, Portugal
                and Malaysia,
                <br />
                studying the most gentle Japanese methods, including Ontake Warm
                Bamboo for pain relief.
              </div>
            </div>
            <br />
            <br />
            <br />
            2023年にスペインに移住し、バルセロナのクリニックにて鍼灸師として、日本式の優しい鍼灸施術を提供しております井澤亮介と申します。
            <br />
            日本で鍼灸の国家資格を取得後、マレーシア、ポルトガルで様々な患者様に鍼灸施術を提供して参りました。
            <br />
            現在バルセロナで日本の優しい鍼灸を受けられる場所はほとんどないため、バルセロナに住む日本人の皆様の、日々の健やかな暮らしをサポートできればと存じます。
            <br />
            痛みをはじめとするお身体の悩みからメンタル面までサポートさせて頂きます。
            <br />
            <br />
            <br />
          </div>

          <h1 className="text-2xl sm:text-3xl text-center font-medium mb-10 text-gray-900">
            <section id="treatments">
              <Element name="treatments">Treatments</Element>
            </section>
          </h1>
          <div className="flex flex-wrap mt-2 flex-col md:flex-row items-center">
            {/* card left */}
            <div className="md:w-1/3 w-full p-4">
              <div className="bg-gray-100 rounded-lg flex flex-col items-center pt-4 pb-5 w-full">
                <img
                  src="./img/acupuncture.png"
                  alt="image of acupuncture"
                  className="w-10 pb-5"
                />
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg font-medium mx-5 text-center">
                    Acupuntura Japonesa suave y cómoda
                  </h2>
                </div>

                <div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2 mb-2">
                    Japanese gentle acupuncture
                  </h2>
                  <h2 className="text-gray-900 text-lg font-medium ml-2 pl-6">
                    優しい日本式の鍼灸治療
                  </h2>
                </div>
              </div>
            </div>
            {/* card center */}
            <div className="md:w-1/3 w-full p-4">
              <div className="bg-gray-100 rounded-lg flex flex-col items-center pt-4 pb-5">
                <img
                  src="./img/bamboo.png"
                  alt="image of bamboo"
                  className="w-10 pb-5"
                />
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg font-medium mx-5 text-center">
                    Ontake Trabajo corporal con bambú caliente
                  </h2>
                </div>

                <div>
                  <h2 className="text-gray-900 text-lg font-medium mb-2">
                    Ontake Warm Bamboo
                  </h2>
                  <h2 className="text-gray-900 text-lg font-medium mb-2">
                    温竹灸マッサージ
                  </h2>
                </div>
              </div>
            </div>
            {/* card right */}
            <div className="md:w-1/3 w-full p-4">
              <div className="bg-gray-100 rounded-lg flex flex-col items-center pt-4 pb-5">
                <img
                  src="./img/massage.png"
                  alt="image of massage"
                  className="w-12 pb-3"
                />
                <div className="flex items-center mb-3 mx-8">
                  <h2 className="text-gray-900 text-lg font-medium ">
                    Masaje japonés shiatsu
                  </h2>
                </div>

                <div>
                  <h2 className="text-gray-900 text-lg font-medium  mb-2">
                    Japanese Massage Shiatsu
                  </h2>
                  <h2 className="text-gray-900 text-lg font-medium  mb-2 text-center">
                    指圧マッサージ
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lower content */}
      <h1 className="text-2xl sm:text-3xl text-center font-medium mb-2 text-gray-900 font-serif">
        <section id="contact">
          <Element
            name="contact"
            className="border-t border-gray-200 pt-10 mb-5"
          >
            Contact
          </Element>
        </section>
      </h1>
      <section className="text-gray-700 font-serif">
        <div className="container px-5 py-4 mx-auto flex flex-wrap lg:pt-12 flex-col lg:flex-row items-center">
          {/* Left side */}
          {/* <div className="mt-10 mb-20 lg:mb-0 lg:mr-40  lg:w-1/4 lg:h-1/4 justify-center"> */}
          <div className="w-1/3 md:w-1/6">
            <img
              src="./img/profile_mono.jpeg"
              alt="image of profile"
              className="rounded"
            />
          </div>
          {/* center */}
          {/* <div className="mt-10 mb-20 lg:mb-0 lg:mr-40  lg:w-1/4 lg:h-1/4 justify-center"> */}
          <div className="sm:w-2/5 pl-5  pt-14 ">
            <div className="flex items-center mb-2">
              <img src="./img/whatsapp.png" alt="log of Whatsapp" />
              <h2 className="text-gray-900 text-lg font-medium ml-2">
                Tel & Whatsapp: 08000000000
              </h2>
            </div>
            <div className="flex items-center mb-2">
              <img
                src="./img/email.png"
                alt="logo of email"
                className="scale-75"
              />
              <h2 className="text-gray-900 text-lg font-medium ml-2 mt-4 mb-5">
                Email: info@izawa-acupuntura-japonesa.com
              </h2>
            </div>
            <div>
              {/* <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2"> */}

              <div className="flex items-center mb-4 ">
                <img
                  src="./img/location.png"
                  alt="logo of location"
                  className="scale-75"
                />
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Location: CITICS (Centro Internacional Terapias Integrativas &
                  Coaching Sistémico)
                </h2>
              </div>
              <h2 className="ml-4">
                <a href="https://www.citics.es/">
                  Via Augusta 29-31, 4º-2ª 08006 Barcelona
                </a>
              </h2>
              <br />
            </div>
          </div>
          {/* right side */}
          <div className="sm:w-full md:w-2/5">
            <a
              href="https://www.google.com/maps/place/CITICS+Centro+Internacional+Terapias+Integrativas+%26+Coaching+Sist%C3%A9mico/@41.3974333,2.1518527,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a320db52083d:0x860fea2c9047d00e!8m2!3d41.3974333!4d2.1540414!16s%2Fg%2F11ng1sv3zm?hl=ja"
              target="_blank"
            >
              <img
                src="./img/map.jpg"
                alt="logo of map"
                className="h-max w-max"
              />
            </a>
          </div>
        </div>
      </section>
      <div className="border-t-2 pt-3 pb-3 ">
        <div className="text-center text-xs text-slate-400 font-serif">
          Copyright © 2023 Izawa Acupuntura Japonesa.
        </div>
      </div>
    </>
  );
}

export default App;
