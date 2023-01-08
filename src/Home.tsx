import { ReactNode, useState } from "react";
import ReactPlayer from "react-player";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
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
import Path from "./components/Path";

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
    <div className="my-3 bg-white text-lg border transition-all">
      <div className="flex p-4 cursor-pointer items-center justify-between"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="italic font-bold text-neutral-700">{question}</div>
        <PlusIcon
          className={`w-8 h-8 transition-transform cursor-pointer ${open ? "rotate-45" : "h-auto"
            }`}
        />
      </div>
      <div className={`transition-[height] ease-in-out px-6 text-lg ${!open ? "h-0 overflow-hidden" : "h-20"}`}>
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

export function StepItem({ desc, icon, index }: any) {
  const Icon = icon;
  return (
    <div className="rounded-full bg-white border-[4px] aspect-square flex items-center flex-col justify-between grow md:max-w-[300px] py-8 text-2xl">
      <span className="inline-flex items-center justify-center font-semibold bg-neutral-800 align-middle text-white rounded-full w-12 h-12">{index}</span>
      <div className="prose-xl text-xl my-4">{desc}</div>
      <div className="">
        <Icon className="w-20 h-20 mx-auto" />
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
      <header className="overflow-x-hidden">
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
      <main>
        <div className="bg-[url('./assets/background.svg')] bg-no-repeat fixed top-0 w-full h-full z-[-1] opacity-10"></div>
        <div>
          <section className="my-20 md:container md:mx-auto">
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
                  height="100%"
                />
              </div>

            </div>
          </section>
          <section className="text-white relative h-screen bg-black py-4 my-12">
            <div className="md:container md:mx-auto">
              <div className="uppercase my-12 border-l-[10px] px-4 border-red-500 text-[48px] font-bold">
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
            </div>
          </section>
          <section className="md:container py-4 mb-24 md:mx-auto">
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
                  height="100%"
                />
              </div>

            </div>
          </section>
          <section className="py-4 my-24">
            <div className="md:container md:mx-auto">
              <div className="uppercase mb-[50px] px-3 text-[48px] font-bold">Why is time generator?</div>
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
              <Button classname="block mx-auto my-4 uppercase">Access now</Button>
            </div>
          </section>
          <section className="bg-black">
            <div className=" py-4 my-24 md:container md:mx-auto">
              <div className="text-[48px] text-white typing-demo text-left inline-block px-4 font-bold border-l-[10px] border-red-500 uppercase">How does this work</div>
              <div className="flex text-center gap-4 my-12 justify-between">
                {[
                  { desc: "Step 1 description", icon: MagnifyingGlassCircleIcon },
                  { desc: "Step 2 description", icon: MagnifyingGlassCircleIcon },
                  { desc: "Step 3 description", icon: MagnifyingGlassCircleIcon },
                ].map((item, index) => <StepItem index={index + 1} key={index} icon={item.icon} desc={item.desc} />)}
              </div>
            </div>
          </section>
          <section className="text-center my-24 md:container md:mx-auto">
            <div className="text-left my-12">
              <div className="text-[48px] font-bold uppercase">presale</div>
              <div className="flex justify-between gap-8">
                <div className="w-2/3">
                  <div className="p-4 border block bg-white mb-4 font-semibold text-2xl uppercase">50% discount</div>
                  <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt tenetur quam ab dicta, omnis recusandae, laboriosam iure quos assumenda reprehenderit alias voluptatem! Architecto, dignissimos ipsa? Quisquam animi aperiam corporis dolorem?</p>
                </div>
                <div className="border-2 bg-white w-1/3 text-2xl text-center flex flex-col gap-4 uppercase py-4">
                  <div>148 <strong>days</strong></div>
                  <div>21 <strong>hours</strong></div>
                  <div>19 <strong>minutes</strong></div>
                  <div>15 <strong>seconds</strong></div>
                  <div>left</div>
                </div>
              </div>
              <Button classname="block mx-auto px-8 uppercase">Access now</Button>
            </div>
            <div className="flex border-2 shadow-sm my-4 text-center bg-white">
              <div className="border-r-2 grow py-2 border-dashed px-4">
                <div className="text-2xl uppercase font-semibold">presale purchase</div>
                <div className="text-3xl">{Math.floor(Math.random() * 5000).toLocaleString("vi-VN")}</div>
              </div>
              <div className="py-2 px-4 grow">
                <div className="text-2xl uppercase font-semibold">Mail subscribed</div>
                <div className="text-3xl">{Math.floor(Math.random() * 50000).toLocaleString("vi-VN")}</div>
              </div>
            </div>
            <div>
              <div>
                <div className="font-semibold text-[24px] uppercase">Update for the time owner</div>
              </div>
              <div className="font-bold uppercase text-[48px]">Exclusively</div>
            </div>
            <form className="my-4">
              <div className="flex mx-auto justify-center gap-2">
                <Input label="Name" />
                <Input label="country" />
                <Input label="phone" />
              </div>
              <div className="flex justify-center">
                <Input label="email" />
              </div>
              <Button classname="text-lg uppercase">Subcribe Now</Button>
            </form>
          </section>
          <section className="text-center md:container my-24 py-4 md:mx-auto">
            <article className="border prose mx-auto p-6 bg-white">
              <div className="text-[36px] font-bold uppercase">The choice is your</div>
              <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            </article>
            <div className="font-semibold mt-4 text-2xl">The choice is your, time owner.</div>
            <div className="font-semibold mb-4 text-2xl">Do you want to escape it or not ?</div>
            <div className="flex justify-center gap-4 my-12 font-semibold text-lg">
              <div className="p-3 red-pill relative border-2 bg-white border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white ease-in-out transition-all text-blue-600">
                <div className="absolute pill top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <span className="w-8 inline-block h-5 border-2 bg-white rounded-l-full border-blue-500 border-r"></span>
                  <span className="w-8 inline-block h-5 border-2 bg-white border-blue-500 rounded-r-full"></span>
                </div>
                Get back to amazon seller center
              </div>
              <div className="p-3 border-2 blue-pill bg-white border-red-600 relative text-red-600 cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in-out">
                <div className="absolute top-0 pill left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <span className="w-8 inline-block h-5 border-2 bg-white rounded-l-full border-red-500 border-r"></span>
                  <span className="w-8 inline-block h-5 border-2 bg-white border-red-500 rounded-r-full"></span>
                </div>
                Own your time
              </div>
            </div>
          </section>
          <section className="md:container md:mx-auto">
            <div className="text-center font-semibold text-[36px]">FAQs</div>
            <div>
              {[
                { question: "Question 1", answer: "Answer 1" },
                { question: "Question 2", answer: "Answer 2" },
              ].map(item => <FAQItem {...item} />)}
            </div>
            <Button classname="block mx-auto uppercase">Access Now</Button>
          </section>
        </div>
      </main >
      <footer className="bg-black text-lg mt-12 h-[256px] p-4 w-full">
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
