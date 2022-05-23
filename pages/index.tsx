import { useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import { MdHouse } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Carousel } from "../components/Carousel";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = ({ apeList, networkList }: any) => {
  const navRef = useRef<HTMLElement>(null);
  const sectionRef = useRef(null);
  const whatsButtonRef = useRef<HTMLAnchorElement>(null);

  function openMenu() {
    const a = document.getElementsByTagName("body")[0];
    a.classList.add("menu-expanded");
  }

  function closeMenu() {
    const a = document.getElementsByTagName("body")[0];

    a.classList.remove("menu-expanded");
  }

  function showBackToTopButtonOnScroll() {
    if (scrollY > 250) {
      whatsButtonRef.current?.classList.add("show");
    } else {
      whatsButtonRef.current?.classList.remove("show");
    }
  }

  function gtag_report_conversion(url: any) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };

    //@ts-ignore
    window.gtag("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_SNIPPET,
      event_callback: callback,
    });

    return false;
  }

  function activateMenuAtCurrentSection(sectionId: string) {
    const a = document.getElementById("menu-links");

    if (a) {
      for (let i = 0; i < a.children.length; i++) {
        let item = a.getElementsByTagName("a")[i];

        if (item.href.includes(sectionId)) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    }
  }

  function showNavOnScroll() {
    if (scrollY > 0) {
      navRef.current?.classList.add("scroll");
    } else {
      navRef.current?.classList.remove("scroll");
    }
  }

  function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Cristina Cordeiro - Corretora de Imóveis - RJ</title>
        <meta
          name="description"
          content="Assistência imobiliária simplificada para todos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav ref={navRef} id="navigation">
          <div className="wrapper">
            <a id="brand" href="#home">
              <MdHouse size={36} id="brand-icon" />
              <div id="brand-title">
                <h1>CRISTINA CORDEIRO</h1>
                <h5>CORRETORA DE IMÓVEIS</h5>
              </div>
            </a>

            <div className="menu">
              <ul id="menu-links" ref={sectionRef}>
                <li>
                  <a onClick={closeMenu} href="#home">
                    Início
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#benefits">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#gallery">
                    Galeria
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#about">
                    Sobre
                  </a>
                </li>
              </ul>

              <a className="button" onClick={closeMenu} href="#contact">
                Agende sua avaliação
              </a>

              <ul className="social-links">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/corretoracristinacordeiro"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 
                                4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 
                                1.99997 17 1.99997Z"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 
                                13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 
                                16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 
                                14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 
                                8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 
                                8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 
                                8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 6.49997H17.51"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/cc.corretora"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 
                                3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 
                                9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 
                                14.7348 5.99997 15 5.99997H18V1.99997Z"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 
                                5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 
                                11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 
                                2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 
                                0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 
                                17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 
                                18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 
                                18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 
                                18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 
                                13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
                        stroke="#FFFAF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <button
              aria-expanded="false"
              aria-label="Abrir menu"
              onClick={openMenu}
              className="open-menu"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20H30"
                  stroke="#00856F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H30"
                  stroke="#00856F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 28L30 28"
                  stroke="#00856F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              aria-expanded="true"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="close-menu"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 10L10 30M10 10L30 30"
                  stroke="#FFFAF1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <InView
          as="section"
          id="home"
          className="matrix"
          threshold={0.7}
          onChange={(inView) => {
            if (inView) {
              activateMenuAtCurrentSection("home");
            }
          }}
        >
          <div className="wrapper">
            <div className="col-a">
              <header>
                <h4>BOAS-VINDAS AO APÊ JÁ 👋</h4>
                <h1>Assistência imobiliária simplificada para todos</h1>
              </header>
              <div className="content">
                <p>
                  Chega de buscas cansativas! Use o dinheiro do seu aluguel para
                  realizar o sonho da casa própria. Economizamos o seu tempo
                  encontrando o imóvel ideal para você.
                </p>

                <a className="button" href="#contact">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8337 11.6667C13.667 11.5833 12.5837 11.0833 12.417 11C12.2503 10.9167 
                            12.0837 10.9167 11.917 11.0833C11.7503 11.25 11.417 11.75 11.2503 11.9167C11.167 
                            12.0833 11.0003 12.0833 10.8337 12C10.2503 11.75 9.66699 11.4167 9.16699 11C8.75033 
                            10.5833 8.33366 10.0833 8.00033 9.58334C7.91699 9.41668 8.00033 9.25001 8.08366 
                            9.16668C8.16699 9.08334 8.25033 8.91668 8.41699 8.83334C8.50033 8.75001 8.58366 
                            8.58334 8.58366 8.50001C8.66699 8.41668 8.66699 8.25001 8.58366 8.16668C8.50033 
                            8.08334 8.08366 7.08334 7.91699 6.66668C7.83366 6.08334 7.66699 6.08334 7.50033 
                            6.08334C7.41699 6.08334 7.25033 6.08334 7.08366 6.08334C6.91699 6.08334 6.66699 
                            6.25001 6.58366 6.33334C6.08366 6.83334 5.83366 7.41668 5.83366 8.08334C5.91699 
                            8.83334 6.16699 9.58334 6.66699 10.25C7.58366 11.5833 8.75033 12.6667 10.167 
                            13.3333C10.5837 13.5 10.917 13.6667 11.3337 13.75C11.7503 13.9167 12.167 13.9167 
                            12.667 13.8333C13.2503 13.75 13.7503 13.3333 14.0837 12.8333C14.2503 12.5 14.2503 
                            12.1667 14.167 11.8333C14.167 11.8333 14.0003 11.75 13.8337 11.6667ZM15.917 
                            4.08334C12.667 0.833344 7.41699 0.833344 4.16699 4.08334C1.50033 6.75001 1.00033 
                            10.8333 2.83366 14.0833L1.66699 18.3333L6.08366 17.1667C7.33366 17.8333 8.66699 
                            18.1667 10.0003 18.1667C14.5837 18.1667 18.2503 14.5 18.2503 9.91668C18.3337 7.75001 
                            17.417 5.66668 15.917 4.08334ZM13.667 15.75C12.5837 16.4167 11.3337 16.8333 10.0003 
                            16.8333C8.75033 16.8333 7.58366 16.5 6.50033 15.9167L6.25033 15.75L3.66699 
                            16.4167L4.33366 13.9167L4.16699 13.6667C2.16699 10.3333 3.16699 6.16668 6.41699 
                            4.08334C9.66699 2.00001 13.8337 3.08334 15.8337 6.25001C17.8337 9.50001 16.917 13.75 
                            13.667 15.75Z"
                      fill="white"
                    />
                  </svg>
                  Agende sua avaliação
                </a>
              </div>
            </div>

            <div className="col-b">
              <img
                src="corretora-apontando-beneficios.png"
                alt="Corretora apontando para os benefícios do financiamento"
              />
            </div>

            <div className="stats">
              <div className="stat">
                <h3>+100</h3>
                <p>Clientes atendidos</p>
              </div>

              <div className="stat">
                <h3>+30</h3>
                <p>Empreendimentos disponíveis</p>
              </div>

              <div className="stat">
                <h3>+4</h3>
                <p>Anos no mercado</p>
              </div>
            </div>
          </div>
        </InView>

        <InView
          as="section"
          id="benefits"
          threshold={0.7}
          onChange={(inView) => {
            if (inView) {
              activateMenuAtCurrentSection("benefits");
            }
          }}
        >
          <div className="wrapper">
            <header>
              <h4>Benefícios</h4>
              <h2>Conhece as nossas oportunidades?</h2>
            </header>

            <div className="content">
              <div className="cards">
                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3>Entrada facilitada</h3>
                  <p>Parcele a entrada do seu imóvel em até 60 vezes.</p>
                </div>

                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3>FGTS</h3>

                  <p>
                    Possibilidade de utilizar o FGTS na entrada e no
                    financiamento.
                  </p>
                </div>

                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3>Complemento de renda</h3>

                  <p>
                    Possibilidade de complementar a renda para financiar o seu
                    imóvel!
                  </p>
                </div>

                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3>Mais quartos</h3>
                  <p>
                    Precisa de espaço? conheça os nossos empreendimentos com
                    dois quartos ou mais.
                  </p>
                </div>

                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3>Imóveis na planta</h3>
                  <p>
                    O melhores preços para quem está planejando adquirir um
                    imóvel.
                  </p>
                </div>

                <div className="card">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                    <path
                      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                      stroke="#00856F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3>Várias localidades</h3>
                  <p>
                    Encontre imóveis em praticamente todas as regiões do Rio de
                    Janeiro!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </InView>

        <InView
          as="section"
          id="gallery"
          threshold={0.7}
          onChange={(inView) => {
            if (inView) {
              activateMenuAtCurrentSection("gallery");
            }
          }}
        >
          <section id="products">
            <div className="wrapper">
              <header>
                <h4>Empreendimentos</h4>
                <h2>
                  Imóveis em todo o{" "}
                  <span style={{ color: "var(--primary-color)" }}>
                    Rio de Janeiro
                  </span>
                </h2>
              </header>
              <div className="content">
                <div style={{ marginTop: "5rem" }}>
                  <Carousel slides={apeList} />
                </div>
              </div>
            </div>
          </section>

          <div className="separate-cards" />

          <section id="network">
            <div className="wrapper">
              <header>
                <h4>BLOG</h4>
                <h2>
                  Confira as últimas{" "}
                  <span style={{ color: "var(--primary-color)" }}>
                    atualizações
                  </span>
                </h2>
              </header>
              <div className="content">
                <div style={{ marginTop: "5rem" }}>
                  <Carousel slides={networkList} />
                </div>
              </div>
            </div>
          </section>
        </InView>

        <InView
          as="section"
          id="about"
          threshold={0.7}
          onChange={(inView) => {
            if (inView) {
              activateMenuAtCurrentSection("about");
            }
          }}
        >
          <div className="wrapper">
            <div className="col-a">
              <header>
                <h4>SOBRE NÓS</h4>
                <h2>Entenda quem somos e por que existimos</h2>
              </header>

              <div className="content">
                <p>
                  "Saia já do aluguel! O financiamento é longo mas não é
                  eterno". Me chamo{" "}
                  <span style={{ fontWeight: 700 }}>Cristina</span> e vejo
                  muitas pessoas perderem oportunidades por não conhecerem as
                  facilidades de hoje na hora de financiar um ímovel, e isso é o
                  que tento passar para o cliente logo no primeiro atendimento.
                </p>
              </div>
            </div>

            <div className="col-b">
              <Image
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/quote-person.jpg"
                alt="Corretora ensinando a conquistar clientes"
                style={{ borderRadius: 11 }}
              />
            </div>
          </div>
        </InView>

        <section id="contact">
          <div className="wrapper">
            <div className="col-a">
              <header>
                <h4>Contato</h4>
                <h2>Entre em contato com a gente!</h2>
              </header>

              <div className="content">
                <ul>
                  <li>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 
                                18V6C2 4.9 2.9 4 4 4Z"
                        stroke="#00856F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="#00856F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Tcrismrv@gmail.com
                  </li>
                </ul>

                <a
                  onClick={gtag_report_conversion}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5521965316122&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o."
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6 13.0001C14.4 12.9001 13.1 12.3001 12.9 12.2001C12.7 12.1001 12.5 
                            12.1001 12.3 12.3001C12.1 12.5001 11.7 13.1001 11.5 13.3001C11.4 13.5001 11.2 13.5001 
                            11 13.4001C10.3 13.1001 9.6 12.7001 9 12.2001C8.5 11.7001 8 11.1001 7.6 10.5001C7.5 
                            10.3001 7.6 10.1001 7.7 10.0001C7.8 9.9001 7.9 9.7001 8.1 9.6001C8.2 9.5001 8.3 
                            9.3001 8.3 9.2001C8.4 9.1001 8.4 8.9001 8.3 8.8001C8.2 8.7001 7.7 7.5001 7.5 
                            7.0001C7.4 6.3001 7.2 6.3001 7 6.3001C6.9 6.3001 6.7 6.3001 6.5 6.3001C6.3 6.3001 6 
                            6.5001 5.9 6.6001C5.3 7.2001 5 7.9001 5 8.7001C5.1 9.6001 5.4 10.5001 6 11.3001C7.1 
                            12.9001 8.5 14.2001 10.2 15.0001C10.7 15.2001 11.1 15.4001 11.6 15.5001C12.1 15.7001 
                            12.6 15.7001 13.2 15.6001C13.9 15.5001 14.5 15.0001 14.9 14.4001C15.1 14.0001 15.1 
                            13.6001 15 13.2001C15 13.2001 14.8 13.1001 14.6 13.0001ZM17.1 3.9001C13.2 9.77516e-05 
                            6.9 9.77516e-05 3 3.9001C-0.2 7.1001 -0.8 12.0001 1.4 15.9001L0 21.0001L5.3 
                            19.6001C6.8 20.4001 8.4 20.8001 10 20.8001C15.5 20.8001 19.9 16.4001 19.9 10.9001C20 
                            8.3001 18.9 5.8001 17.1 3.9001ZM14.4 17.9001C13.1 18.7001 11.6 19.2001 10 19.2001C8.5 
                            19.2001 7.1 18.8001 5.8 18.1001L5.5 17.9001L2.4 18.7001L3.2 15.7001L3 15.4001C0.6 
                            11.4001 1.8 6.4001 5.7 3.9001C9.6 1.4001 14.6 2.7001 17 6.5001C19.4 10.4001 18.3 
                            15.5001 14.4 17.9001Z"
                      fill="white"
                    />
                  </svg>
                  Agende sua avaliação
                </a>
              </div>
            </div>

            <div className="col-b">
              <Image
                width={1150}
                height={758}
                src="/corretora-aguardando-contato.jpg"
                alt="Corretora aguardando contatos"
                style={{
                  borderRadius: 11,
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrapper">
          <div className="col-a">
            <p>©{new Date().getFullYear()} - Todos os direitos reservados.</p>
          </div>

          <div className="col-b">
            <ul className="social-links">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/corretoracristinacordeiro"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 
                                4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 
                                1.99997 17 1.99997Z"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 
                                13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 
                                16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 
                                14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 
                                8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 
                                8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 
                                8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.49997H17.51"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/cc.corretora"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 
                                3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 
                                9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 
                                14.7348 5.99997 15 5.99997H18V1.99997Z"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 
                                5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 
                                11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 
                                2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 
                                0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 
                                17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 
                                18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 
                                18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 
                                18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 
                                13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
                      stroke="#FFFAF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a
        id="whats-button"
        target="_blank"
        rel="noreferrer"
        onClick={gtag_report_conversion}
        href="https://api.whatsapp.com/send?phone=5521965316122&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o."
        ref={whatsButtonRef}
      >
        <AiOutlineWhatsApp size={40} color="white" />
      </a>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const res = await Promise.all([
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/ape"),
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/network"),
  ]);

  const data = {
    apeList: await res[0].json(),
    networkList: await res[1].json(),
  };

  if (!data.apeList && !data.networkList) {
    return {
      notFound: true,
    };
  }

  return {
    props: { apeList: data.apeList, networkList: data.networkList },
  };
}

export default Home;
