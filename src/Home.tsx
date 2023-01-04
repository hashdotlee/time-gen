import { ReactNode, useState } from "react";
import ReactPlayer from "react-player";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountDown from "./components/CountDown";
import { getImage } from "./utils/getImage";
import Button from "./components/Button";
import Slider from "./components/Slider";
import Input from "./components/Input";
import MatrixRain from "./components/MatrixRain";
import ImageParallax from "./components/ImageParallax";
import Logo from "./components/Logo";
import LogoImage from "./components/LogoImage";

export interface SlideProps {
  content: string;
  image: string;
}

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 text-lg border transition-[height]">
      <div className="flex items-center justify-between">
        <div className="italic font-bold text-neutral-700">{question}</div>
        <PlusIcon
          className={`w-8 h-8 transition-transform cursor-pointer ${open ? "rotate-45" : ""
            }`}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div className={`p-4 transition-all text-lg ${!open ? "hidden" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

export function InstructorItem({
  avatar,
  name,
  role,
}: {
  avatar: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex p-2 bg-zinc-900 rounded-full items-center w-full gap-2">
      <div className="w-24 aspect-1">
        <img
          src={avatar}
          alt="person"
          className="w-full h-full rounded-full border-yellow-500 border-2"
        />
      </div>
      <div className="text-lg p-2">
        <div className="font-semibold text-white">{name}</div>
        <div className="font-bold text-yellow-500">{role}</div>
      </div>
    </div>
  );
}

export function VideoPlayerWrapper({ children }: { children?: ReactNode }) {
  return <div className="video-player-wrapper h-screen">{children}</div>;
}

export function StepItem({ title, desc, examples, num, offset }: any) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  return (
    <div className={`py-12 relative ${offset}`} ref={ref}>
      <div className="text-2xl font-bold flex">
        <div className="text-2xl relative font-bold self-center">
          <div
            className={`absolute top-1/2 z-[-1] left-1/2 p-8 border-[1.5px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform border-yellow-500 ${inView ? "scale-[2]" : ""
              }`}
          />
          <div>{num}</div>
        </div>
        <div className="p-4 text-black uppercase">{title}</div>
        <div className="inline-block grow bg-gray-100"></div>
      </div>
      <div className=" flex items-center rounded-md gap-8 p-8 bg-gray-100 text-lg">
        <div className="text-xl prose">{desc}</div>
        <div className="flex gap-6 p-4 flex-wrap">
          {examples.map((item: any) => {
            const Icon = item.icon;
            return (
              <div className="rounded-xl transition-transform cursor-pointer p-4 hover:scale-110 flex flex-col items-center from-zinc-900 to-gray-500 bg-gradient-to-tl">
                <Icon className="w-12 h-12 text-yellow-500" />
                <span className=" text-yellow-500">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const menus = [
    {
      name: "Home",
      path: "/home",
      important: false,
    },
    {
      name: "Presale",
      path: "/presale",
      important: true,
    },
    {
      name: "Product",
      path: "/products",
      important: false,
    },
    {
      name: "My purchase",
      path: "/my-purchases",
      important: false,
    },
  ];
  return (
    <>
      <header>
        <nav className="top-0 fixed scroll-smooth items-center bg-black text-white z-50 shadow-sm flex gap-4 px-1 h-[64px] w-full">
          <div className="w-[56px] h-[56px] p-2">
            <LogoImage />
          </div>
          <ul className={`hidden md:flex items-center gap-2`}>
            {menus.map((item) => (
              <Link
                to={item.path}
                className={`py-2 px-4 rounded-md font-semibold hover:text-black hover:bg-yellow-200 uppercase ${item.important ? "text-rose-600" : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="ml-auto font-semibold uppercase px-4 py-2 rounded-md hover:bg-yellow-200 cursor-pointer flex hover:text-black items-center gap-2">
            <span>Login/Register</span>
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
          </div>
        </nav>
        <div className="w-full relative bg-zinc-900 overflow-hidden">
          <div className="hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=pFS4zYWxzNA"
              controls={false}
              light={true}
              muted={true}
              playing={playVideo}
              playIcon={undefined}
              onPause={() => setPlayVideo(false)}
              wrapper={VideoPlayerWrapper}
              onPlay={() => setPlayVideo(true)}
            />
          </div>
          <div className="relative">
            <MatrixRain />
          </div>
          <div
            className={`absolute transition-all top-0 text-white w-full h-full ease-in-out ${playVideo
              ? "z-[-1] opacity-0"
              : "z-30 bg-black/10 opacity-100"
              }`}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="flex-col relative items-center justify-center flex w-full h-full">
                <div className="absolute hidden w-full z-30 top-[64px] from-zinc-900/40 via-zinc-900 to-zinc-900/40 bg-gradient-to-r p-4">
                  <div className="flex flex-col gap-3 md:flex-row w-full max-w-[1068px] items-center md:items-start mx-auto md:justify-center">
                    <div className="self-center">
                      <span className="uppercase font-semibold bg-red-700 px-4 py-2 rounded-md">
                        presale
                      </span>
                      <span className="font-semibold uppercase text-white ml-3">
                        deploy time left:{" "}
                      </span>
                      <CountDown cn="text-white text-lg font-semibold ml-3 rounded-md bg-zinc-900 px-4 py-2" />
                    </div>
                    <div className="text-white flex gap-2 md:block ">
                      <div className="uppercase tex-lg font-semibold">
                        Purchase now
                      </div>
                      <div>For onetime only 50% discount</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 max-w-full">
                  <Logo />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-0 h-0 border-b-0 border-r-0 border-l-[50px] border-l-white z-30 border-t-[50px] border-t-black/0 bottom-0">

          </div>
          <div className="flex left-1/2 translate-x-[-50%] z-30 text-white absolute bottom-12 gap-4 text-2xl">
            <ChevronDownIcon className="animate-bounce w-8 inline-block" />
            Scroll down
            <ChevronDownIcon className="animate-bounce w-8 inline-block" />
          </div>
          <div className="w-full h-16 absolute z-20 buttom-0 bg-gradient-to-b from-black"></div>
        </div>
      </header>
      <main className="">
        <div className="md:container md:mx-auto">
          <section className="my-20">
            <div className="uppercase my-[50px] px-3 text-[48px] font-bold">What is time generator?</div>
            <div className="flex -mx-3 px-3 py-3 flex-wrap justify-between">
              <article className="w-full md:w-1/2 px-6 prose-sm max-w-prose">
                <p className="first-letter:text-3xl first-letter:font-bold">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                  officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                  amet voluptate voluptate dolor minim nulla est proident. Nostrud
                  officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                  ex occaecat reprehenderit commodo officia dolor Lorem duis
                  laboris cupidatat officia voluptate. Culpa proident adipisicing
                  id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                  Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                  enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                  et est culpa et culpa duis.
                </p>
                <Button classname="block mx-auto w-full">ACCESS NOW</Button>
              </article>
              <div
                className="w-full px-3 md:w-1/2"
              >
                <ImageParallax
                  src={getImage("watch", 2000, 2000)}
                  alt="watch"
                  width="100%"
                  height="400px"
                />
              </div>

            </div>
          </section>
          <div className="bg-black left-0 w-screen h-full absolute z-[-1]"></div>
          <section className="text-white relative h-screen">
            <div className="uppercase mt-36 mb-12 border-l-[10px] px-4 border-red-500 text-[48px] font-bold">
              <div>How it can change your life?</div>
              <div>Have you ever?</div>
            </div>
            <div className="relative">
              <div>
                <Slider>
                  {[1, 2, 3, 4, 5].map(item => (
                    <div className=" text-black px-4 bg-white">
                      <div className="flex border bg-white gap-4 px-8 py-4 justify-between">
                        <div className="text-[36px]">Image description</div>
                        <img src={getImage("watch", 300, 300)} /></div>
                    </div>
                  )
                  )}
                </Slider>
              </div>
              <div className="absolute w-[200px] h-full bg-gradient-to-r from-black/90 to-white/0 left-0 top-0"></div>
              <div className="absolute w-[200px] h-full bg-gradient-to-l from-black/90 to-white/0 right-0 top-0"></div>
            </div>
          </section>
          <section>
            <div className="text-[2rem] font-bold uppercase text-center">
              <div>Yes?</div>
              <div>Then you have found your</div>
              <div>Solution</div>
              <Button classname="uppercase text-lg w-1/2 sm:w-1/4 my-4">Right here</Button>
            </div>
            <div className="uppercase my-[50px] px-3 text-[48px] font-bold">Who is time generator for?</div>
            <div className="flex -mx-3 px-3 py-3 flex-wrap justify-between">
              <article className="w-full md:w-1/2 px-6 prose-sm max-w-prose">
                <p className="first-letter:text-3xl first-letter:font-bold">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                  officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                  amet voluptate voluptate dolor minim nulla est proident. Nostrud
                  officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                  ex occaecat reprehenderit commodo officia dolor Lorem duis
                  laboris cupidatat officia voluptate. Culpa proident adipisicing
                  id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                  Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                  enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                  et est culpa et culpa duis.
                </p>
                <Button classname="block mx-auto w-full">ACCESS NOW</Button>
              </article>
              <div
                className="w-full px-3 md:w-1/2"
              >
                <ImageParallax
                  src={getImage("watch", 2000, 2000)}
                  alt="watch"
                  width="100%"
                  height="400px"
                />
              </div>

            </div>
          </section>
          <section>
            <div className="uppercase my-[50px] px-3 text-[48px] font-bold">Why is time generator?</div>
            <div>
              <div className="flex flex-wrap prose-base justify-center -mx-32">
                {[
                  {
                    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                  {
                    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                  {
                    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                  {
                    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                  {
                    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                ].map((item, i) => (
                  <div className="first-letter:text-2xl first-letter:font-bold p-4 m-3 shadow-sm border md:w-1/4">
                    {i + 1}. {item.content}
                  </div>
                ))}
              </div>
            </div>
            <Button>Access now</Button>
          </section>
          <section>
            <div>How does this work</div>
            <div></div>
            <div>
              <div>Presale</div>
              <div>50% discount</div>
              <div className="flex">
                <div></div>
                <div></div>
              </div>
              <Button>Access now</Button>
            </div>
          </section>
          <section>
            <div>
              <div>
                <div>Update for the time owner</div>
              </div>
              <div>Exclusive</div>
            </div>
            <form>
              <div className="flex gap-2">
                <Input />
                <Input />
                <Input />
              </div>
              <div>
                <Input />
              </div>
              <Button>Subcribe Now</Button>
            </form>
          </section>
          <section>
            <article></article>
            <div>The choice is your, time owner.</div>
            <div>do you want to escape it or not ?</div>
            <div className="flex">
              <div>Get back to amazon seller center</div>
              <div>Own your time</div>
            </div>
          </section>
          <section>
            <div>FAQ</div>
            <div></div>
            <Button>Access Now</Button>
          </section>
        </div>
      </main>
      <footer className="bg-zinc-900 text-lg mt-12 h-[256px] p-4 w-full">
        <div className="max-w-[1068px] mx-auto text-neutral-100 p-4">
          <ul>
            <li>
              <Link to="/login" className="underline">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/login" className="underline">
                Manage Membership
              </Link>
            </li>
            <li>
              <Link to="/login" className="underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="underline">
                Term and Conditions
              </Link>
            </li>
            <li>
              <Link to="/login" className="underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            Need help? Contact{" "}
            <b>
              <u>
                <a href="mailto:...@gmail.com">...@gmail.com</a>
              </u>
            </b>
          </div>
        </div>
      </footer>
    </>
  );
}
