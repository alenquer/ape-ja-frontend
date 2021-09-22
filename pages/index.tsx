import { useState, useRef, useEffect } from "react";
import Lottie from "react-lottie";
import Head from "next/head";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdLocationCity,
  MdCheck,
  MdHeadsetMic,
} from "react-icons/md";
import houseAnimation from "../assets/animations/houseAnimation.json";

export default function Home({ data }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(data.length === 0);
  const [maxPage, setMaxPage] = useState(Math.ceil(data.length / 3));
  const [windowSize, setWindowSize] = useState(0);

  const ref = useRef<any>(null);

  const animation = useAnimation();

  const translateXForElement = (element: any) => {
    const transform = element.style.transform;

    if (!transform || transform.indexOf("translate3d(") < 0) {
      return 0;
    }

    const extractTranslateX = transform.match(/translate3d\((-?\d+)/);

    return extractTranslateX && extractTranslateX.length === 2
      ? parseInt(extractTranslateX[1], 10)
      : 0;
  };

  // function reorder(x: number, obj: number) {
  //   if (x !== 0) {
  //     return -(Math.ceil(-x / obj) * obj);
  //   } else {
  //     return x;
  //   }
  // }

  useEffect(() => {
    setWindowSize(window.innerWidth);

    window.addEventListener("resize", (e: any) => {
      if (loading) return;

      const xPos = translateXForElement(ref.current);

      if (xPos < 0) {
        animation.start({
          x: 0,
        });
        setPage(1);
      }

      setWindowSize(window.innerWidth);
    });
  }, []);

  function onLeftClick() {
    const xSize = ref.current.children[0].clientWidth + 12;

    const newXPosition = (page - 2) * 3 * xSize;

    animation.start({
      x: page > 1 ? -newXPosition : 0,
    });

    setPage(page > 1 ? page - 1 : 1);
  }

  function onRightClick() {
    const xSize = ref.current.children[0].clientWidth + 12;

    if (page === maxPage) return;

    const newXPosition = page * 3 * xSize;

    animation.start({
      x: -newXPosition,
    });

    setPage(page !== maxPage ? page + 1 : maxPage);
  }

  let activeColor = (v: number) => (page === v ? "#badfa8" : "#329d00");

  const ApeCard: React.FC<{ name: any; thumbnail: any }> = ({
    name,
    thumbnail,
  }) => {
    return (
      <li className="flex-shrink-0 mr-3 w-[26rem] h-48 text-center">
        <motion.div
          className="w-full h-full p-1 mr-3 bg-green-500 rounded-md cursor-pointer"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.9 }}
        />
        <span className="block mt-2 text-black">{name}</span>
      </li>
    );
  };

  return (
    <div>
      <Head>
        <title>Encontrar imóveis para financiar só no Ape Já!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-center max-w-6xl py-6 m-auto">
        <h1 className="text-2xl font-bold text-green-600 sm:cursor-pointer">
          APÊ JÁ
        </h1>
      </header>
      <section className="flex flex-col items-center justify-between w-full lg:flex-row">
        <aside className="flex flex-col justify-center w-full px-6 py-6 bg-gradient-to-r from-green-500 to-green-700 lg:rounded-tr-3xl lg:rounded-br-3xl lg:w-3/5 lg:px-14 lg:py-14 ">
          <h1 className="text-2xl font-bold text-white xl:text-4xl font-jost">
            Empreendimentos prontos, em construção e na planta!
          </h1>
          <ul className="my-4">
            <li className="before:inline-block before:w-2 before:h-2 before:bg-white before:mr-2 before:rounded-full m-0.5 text-white text-lg font-jost">
              Entrada facilitada em até 60x
            </li>
            <li className="before:inline-block before:w-2 before:h-2 before:bg-white before:mr-2 before:rounded-full m-0.5 text-white text-lg font-jost">
              Simulação sem compromisso
            </li>
            <li className="before:inline-block before:w-2 before:h-2 before:bg-white before:mr-2 before:rounded-full m-0.5 text-white text-lg font-jost">
              Possibilidade de escolha
            </li>
            <li className="before:inline-block before:w-2 before:h-2 before:bg-white before:mr-2 before:rounded-full m-0.5 text-white text-lg font-jost">
              Atendimento personalizado
            </li>
            <a href="https://forms.gle/Yauzpts1mkhQMWuz7" target="_blank">
              <button className="px-12 py-2 mt-4 font-bold text-white bg-orange-400 rounded hover:bg-orange-200">
                SIMULAÇÃO
              </button>
            </a>
          </ul>
        </aside>
        <aside className="flex items-center justify-center w-2/5">
          <Lottie
            width="20rem"
            height="20rem"
            style={{ cursor: "none" }}
            options={{
              loop: true,
              autoplay: true,
              animationData: houseAnimation,
            }}
          />
        </aside>
      </section>
      <hr className="h-px mx-auto mb-16 bg-gray-300 max-w-7xl lg:hidden" />
      <section className="container items-center px-3 mx-auto text-center lg:mt-16 max-w-7xl">
        <h1 className="text-3xl font-bold text-black">Procura um imóvel?</h1>
        <span className="inline-block my-3 font-bold text-green-500">
          Veja como é simples
        </span>
        <ul className="flex flex-col items-center justify-between w-full my-12 lg:flex-row">
          <li className="flex flex-col items-center max-w-xs">
            <motion.div whileHover={{ rotate: 360 }}>
              <MdLocationCity className="w-20 h-20 mx-auto mb-8 text-yellow-500 sm:cursor-pointer" />
            </motion.div>
            <h1 className="text-base font-bold">1. Escolha sua localidade</h1>
            <span className="my-3">
              Escolha o local de sua preferencia para resultados mais precisos.
            </span>
          </li>
          <MdKeyboardArrowRight className="invisible w-12 h-12 mx-8 text-green-200 lg:visible" />
          <li className="flex flex-col items-center max-w-xs">
            <motion.div whileHover={{ rotate: 360 }}>
              <MdCheck className="w-20 h-20 mx-auto mb-8 text-yellow-500 sm:cursor-pointer" />
            </motion.div>
            <h1 className="text-base font-bold">2. Faça sua simulação</h1>
            <span className="my-3">
              Você preenche um formulário com seus dados em um ambiente seguro
              para verificar a disponibilidade de um imóvel.
            </span>
          </li>
          <MdKeyboardArrowRight className="invisible w-12 h-12 mx-8 text-green-200 lg:visible" />
          <li className="flex flex-col items-center max-w-xs">
            <motion.div whileHover={{ rotate: 360 }}>
              <MdHeadsetMic className="w-20 h-20 mx-auto mb-8 text-yellow-500 sm:cursor-pointer" />
            </motion.div>
            <h1 className="text-base font-bold">3. Aguarde o contato</h1>
            <span className="my-3">
              Um dos nossos agentes entrará em contato para um atendimento mais
              personalizado.
            </span>
          </li>
        </ul>
      </section>
      <hr className="h-px mx-auto my-16 bg-gray-300 max-w-7xl" />
      <section className="m-auto overflow-hidden max-w-7xl">
        <div className="flex items-center justify-center xl:justify-between">
          <h1 className="text-2xl font-bold">
            Imóveis em todo o{" "}
            <span
              style={{
                color: "#6aac4b",
                cursor: "pointer",
              }}
            >
              Rio de Janeiro
            </span>
          </h1>
          <div className="items-center justify-center hidden xl:flex">
            <button onClick={onLeftClick}>
              <MdKeyboardArrowLeft className="w-8 h-8" color={activeColor(1)} />
            </button>
            <span>
              {page} / {maxPage}
            </span>
            <button onClick={onRightClick}>
              <MdKeyboardArrowRight
                className="w-8 h-8"
                color={activeColor(maxPage)}
              />
            </button>
          </div>
        </div>
        <motion.ul
          ref={ref}
          className="flex items-center w-full h-64"
          drag="x"
          animate={animation}
          onDragEnd={(e, info) => {
            if (windowSize > 1280) {
              info.offset.x > 0 ? onLeftClick() : onRightClick();
            }
          }}
          dragConstraints={{
            left:
              windowSize > 1280
                ? -(1280 * (maxPage - 1))
                : -(ref.current?.scrollWidth - ref.current?.clientWidth),
            right: 0,
          }}
        >
          {data.map((res, idx) => {
            return (
              <ApeCard key={idx} name={res.name} thumbnail={res.thumbnail} />
            );
          })}
          <ApeCard
            name="Escolher Localidade"
            thumbnail="https://imgur.com/BzZap0h.jpg"
          />
        </motion.ul>
      </section>
      <hr className="h-px mx-auto my-16 bg-gray-300 max-w-7xl" />
      <section className="relative z-10 max-w-screen-lg mx-auto my-16 text-center xl:max-w-screen-xl">
        <div className="px-4 sm:px-6 md:px-8">
          <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-orange-400 lg:text-5xl">
            HORA DE SAIR DO ALUGUEL
          </h2>
          <figure>
            <blockquote>
              <p className="max-w-4xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10">
                "Saia já do aluguel! O financiamento é longo mas não é eterno.
                Muitas pessoas perdem oportunidades por não conhecerem as
                facilidades de hoje na hora de financiar um ímovel, e isso é o
                que tento passar para o cliente logo no primeiro atendimento."
              </p>
            </blockquote>
            <figcaption className="flex flex-col items-center font-medium sm:text-xl">
              <div className="p-1 mb-3 border-2 border-orange-400 rounded-full">
                <Image
                  src="/quote-person.jpg"
                  width={80}
                  height={80}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="text-gray-900">Cristina Cordeiro</div>
              <div className="text-orange-400">Corretora de Imóveis</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <hr className="h-px mx-auto my-16 bg-gray-300 max-w-7xl" />
      <section className="text-center">
        <h1 className="text-3xl font-bold">Buscas mais populares</h1>
        <ul className="mt-3">
          <li>
            <div>
              <a href="#" className="text-orange-600 hover:text-orange-200">
                Imóveis na planta
              </a>
            </div>
            <div>
              <a href="#" className="text-orange-600 hover:text-orange-200">
                Imóveis para lançamentos
              </a>
            </div>
            <div>
              <a href="#" className="text-orange-600 hover:text-orange-200">
                Imóveis em construção
              </a>
            </div>
            <div>
              <a href="#" className="text-orange-600 hover:text-orange-200">
                Melhores construtoras
              </a>
            </div>
            <div>
              <a href="#" className="text-orange-600 hover:text-orange-200">
                Apartamentos no Rio de Janeiro
              </a>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center px-4 mx-auto mt-16 text-center bg-orange-400 md:flex-row py-14">
        {/* <img src="/app-rg.png" className="hidden mx-6 h-72" /> */}
        <div>
          <h1 className="max-w-lg text-white">
            <span className="block text-3xl font-bold">
              Conheça suas oportunidades!
            </span>
            <span className="inline-block my-3">
              Não perca a chance de conhecer os melhores corretores da sua
              região e encontrar os melhores empreendimentos.
            </span>
          </h1>
          <a href="https://forms.gle/Yauzpts1mkhQMWuz7" target="_blank">
            <button
              type="button"
              className="inline-flex items-center h-12 px-8 font-bold text-white transition duration-150 ease-in-out bg-yellow-700 border border-transparent rounded-full hover:bg-orange-200 focus:outline-none active:bg-yellow-700"
            >
              CONTATO
            </button>
          </a>
        </div>
      </section>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Alenquer
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/ape");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
