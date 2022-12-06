import { ReactNode, useState } from "react";
import ReactPlayer from "react-player";
import { ChevronDownIcon, HandRaisedIcon, PencilIcon, PlayCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Slider from 'react-perfect-slider'
import { useInView } from 'react-intersection-observer';


export function FAQItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="p-6 text-lg border transition-[height]">
    <div className="flex items-center justify-between">
      <div className="italic font-bold text-neutral-700">{question}</div>
      <PlusIcon className={`w-8 h-8 transition-transform cursor-pointer ${open ? "rotate-45" : ""}`} onClick={() => {
        setOpen(!open)
      }} />
    </div>
    <div className={`p-4 transition-all text-lg ${!open ? "hidden" : ""}`}>
      {answer}
    </div>
  </div>
}


export function InstructorItem({ avatar, name, role }: { avatar: string; name: string; role: string }) {
  return <div className="flex p-2 bg-zinc-900 rounded-full items-center w-full gap-2">
    <div className="w-24 aspect-1">
      <img src={avatar} alt="person" className="w-full h-full rounded-full border-yellow-500 border-2" />
    </div>
    <div className="text-lg p-2">
      <div className="font-semibold text-white">{name}</div>
      <div className="font-bold text-yellow-500">{role}</div>
    </div>
  </div>
}

export function VideoPlayerWrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="video-player-wrapper aspect-video mx-auto h-screen">
      {children}
    </div>
  );
}

export function StepItem({ title, desc, examples, num, offset }: any) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  return <div className={`py-12 relative ${offset}`} ref={ref}>
    <div className="text-2xl font-bold flex">
      <div className="text-2xl relative font-bold self-center">
        <div className={`absolute top-1/2 z-[-1] left-1/2 p-8 border-[1.5px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform border-yellow-500 ${inView ? "scale-[2]" : ""}`} />
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
          return <div className="rounded-xl transition-transform cursor-pointer p-4 hover:scale-110 flex flex-col items-center from-zinc-900 to-gray-500 bg-gradient-to-tl">
            <Icon className="w-12 h-12 text-yellow-500" />
            <span className=" text-yellow-500">{item.label}</span>
          </div>
        })}
      </div>
    </div>
  </div>
}


export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div className="bg-[linear-gradient(180deg,hsla(0,0%,100%,.38),hsla(0,0%,100%,.38)),url('https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/636fc25e71bc7374d6a2d00e_waves-bg-compressed.png')] snap-y h-screen snap-mandatory overflow-y-scroll">
        <header className="w-full h-full relative snap-start bg-black overflow-hidden">
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=CLeZyIID9Bo&t=4520s"
              controls={false}
              playing={playVideo}
              onPause={() => setPlayVideo(false)}
              wrapper={VideoPlayerWrapper}
              onPlay={() => setPlayVideo(true)}
            />
          </div>
          <div
            className={`absolute transition-all top-0 text-white w-full h-full ease-in-out ${playVideo ? "z-[-1] opacity-0" : "z-30 bg-black/80 opacity-100"
              }`}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="flex-col relative items-center justify-center flex w-full h-full">
                <div className="absolute left-0 top-0 p-8">
                  <ul className="text-2xl uppercase">
                    <li className="hover:underline mb-2">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="hover:underline">
                      <Link to="/support">Support</Link>
                    </li>
                  </ul>
                </div>
                <div className="aspect-1 w-32">
                  <img
                    src="http://placekitten.com/g/200/200"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h1 className="text-[70px] uppercase font-bold">
                  The real world
                </h1>
                <div className="uppercase text-2xl">click to play video</div>
                <button
                  onClick={() => setPlayVideo(!playVideo)}
                  className="w-20 h-20"
                >
                  <PlayCircleIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="flex left-1/2 translate-x-[-50%] z-30 text-white absolute bottom-12 gap-4 text-2xl">
            <ChevronDownIcon className="animate-bounce w-8 inline-block" />
            <a
              href="#section_1"
              className="uppercase cursor-pointer hover:underline"
            >
              Scroll down
            </a>
            <ChevronDownIcon className="animate-bounce w-8 inline-block" />
          </div>
          <div className="w-full h-16 absolute z-20 buttom-0 bg-gradient-to-b from-black"></div>
        </header>
        <section
          id="section_1"
          className="h-full relative snap-start scroll-pb-16 overflow-hidden"
        >
          <div className="w-full h-[90%] bg-right-bottom bg-cover bg-[linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.3)),url('https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/633b4aa550de1323716feb31_matrix2000x2000.webp')]" />
          <article className="absolute prose tracking-wider p-8 top-0 items-center gap-8 text-white flex flex-col left-1/2 rounded-md -translate-x-1/2 w-2/5 h-full bg-zinc-900 border-2 border-yellow-500">
            <div className="text-3xl font-bold p-4 border-b-[3px] border-yellow-500 uppercase text-center">
              What is <br /> the real world?
            </div>
            <div className="text-xl text-neutral-300">
              <p>
                The Real World is a global community of like-minded individuals
                striving to acquire an abundance of wealth.{" "}
              </p>
              <p>
                We provide our members with advanced education and mentoring from
                multimillionaire experts.
              </p>
              <p>
                Our fully independent learning platform is designed to break
                people free from the Matrix.
              </p>
            </div>
            <div>
              <button className="text-xl uppercase px-8 py-4 drop-shadow-[0_0_11px_0_#ff9801] bg-[#fff1db] text-black rounded-md">
                Join now
              </button>
            </div>
          </article>
        </section>
        <section className="h-full w-full max-w-[1068px] overflow-hidden mx-auto snap-start p-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="grow prose text-black text-lg tracking-wider">
              <div className="text-3xl font-bold">WHAT IS OUR PLAN? </div>
              <div className="w-1/2 bg-yellow-400 h-0.5 mt-3 -ml-5"></div>
              <p>The Real World is part of a 3-Step Plan. </p>
              <p>
                <strong className="font-bold">Step 1</strong> was creating{" "}
                <strong className="font-bold">Hustler's University</strong>: a
                money-making platform that thrived with 150.000 students in the
                heart of The Matrix
              </p>
            </div>
            <div className="grow">
              <img
                src="https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/6371337a913d03dec2545678_hu%20img%20final%20compressed-p-1080.webp"
                className="w-full h-full rounded-md border-yellow-500 border-[2px]"
                alt="world new"
              />
            </div>
            <div className="grow">
              <img
                src="https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/63714f82f003941d9759a9bc_tate%20img%20shine%20compressed-p-1080.webp"
                className="w-full h-full rounded-md border-yellow-500 border-[2px]"
                alt="world new"
              />
            </div>
            <div className="grow prose text-black text-lg tracking-wider">
              <p>The Real World is part of a 3-Step Plan. </p>
              <p>
                <strong className="font-bold">Step 1</strong> was creating{" "}
                <strong className="font-bold">Hustler's University</strong>: a
                money-making platform that thrived with 150.000 students in the
                heart of The Matrix
              </p>
              <div>
                <button className="hover:scale-105 transition-transform uppercase mx-auto block bg-yellow-500 border px-8 py-4 text-lg font-bold mt-8 rounded-md text-white">Join now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full relative w-full flex items-center overflow-hidden snap-start">
          <div className="bg-zinc-900 w-full h-full max-h-[80vh]" />
          <div className="absolute w-full h-full top-0 left-0">
            <div className="relative h-full w-full max-w-[1068px] mx-auto flex items-center">
              <div>
                <article className="prose tracking-wider">
                  <div className="text-3xl font-bold py-4 text-white  uppercase text-left">
                    our teaching <br /> philosophy
                  </div>
                  <div className="h-0.5 bg-yellow-600 mt-3 w-32" />
                  <div className="text-xl text-neutral-300">
                    <p>
                      The Real World is a global community of like-minded individuals
                      striving to acquire an abundance of wealth.{" "}
                    </p>
                    <p>
                      We provide our members with advanced education and mentoring from
                      multimillionaire experts.
                    </p>
                    <p>
                      Our fully independent learning platform is designed to break
                      people free from the Matrix.
                    </p>
                  </div>
                  <div>
                    <button className="text-xl uppercase px-8 py-4 drop-shadow-[0_0_11px_0_#ff9801] bg-[#fff1db] text-black rounded-md">
                      Join now
                    </button>
                  </div>
                </article>
              </div>
              <div className="relative w-1/2 h-full">
                <div className="absolute top-10 border-yellow-600 border-2 left-10 rounded-md overflow-hidden">
                  <Slider>
                    <img src="https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637137b101967324c6c562ed_3.webp" alt="comment" />
                    <img src="https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637137b11316251b4e0399fe_4.webp" alt="day 8 comment" />

                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full snap-start overflow-hidden">
          <div className="max-w-[1068px] mx-auto">
            <div className="text-center">
              <div className="mt-16 flex flex-col items-center">
                <div className="uppercase font-bold text-3xl">
                  <div> WHAT DO WE TEACH?</div>
                  <div className="h-0.5 w-[80%] mx-auto mt-2 bg-yellow-400" />
                </div>
              </div>
              <p className="prose text-center mx-auto mt-3">We'll train you to build a large income, then you’ll be taught to multiply it and manage it.</p>
            </div>
          </div>
          {[
            {
              offset: "ml-[20%]",
              title: "choose a skill",
              desc: <div className="prose text-xl">
                <div> Upon joining, we’ll start you with one of 5 business models that are:</div>
                <ul className="list-disc list-inside">
                  <li>Completely online </li>
                  <li>Fast to generate profits</li>
                  <li>Scalable to a 6-figure income</li>
                </ul>
              </div>,
              examples: [{
                label: "Copywriting",
                icon: PencilIcon
              },
              {
                label: "Freelancing",
                icon: HandRaisedIcon

              },
              ]

            },
            {
              title: "choose a skill",
              offset: "ml-[25%]",
              desc: <div>
                <div> Upon joining, we’ll start you with one of 5 business models that are:</div>
                <ul>
                  <li>Completely online </li>
                  <li>Fast to generate profits</li>
                  <li>Scalable to a 6-figure income</li>
                </ul>
              </div>,
              examples: [{
                label: "Copywriting",
                icon: PencilIcon
              },
              {
                label: "Freelancing",
                icon: HandRaisedIcon

              },
              ]

            },
            {
              offset: "ml-[30%]",
              title: "choose a skill",
              desc: <div>
                <div> Upon joining, we’ll start you with one of 5 business models that are:</div>
                <ul className="list-disc">
                  <li>Completely online </li>
                  <li>Fast to generate profits</li>
                  <li>Scalable to a 6-figure income</li>
                </ul>
              </div>,
              examples: [{
                label: "Copywriting",
                icon: PencilIcon
              },
              {
                label: "Freelancing",
                icon: HandRaisedIcon

              },
              ]
            }
          ].map((item, i) => (
            <StepItem {...item} num={i + 1} />
          ))}


        </section>
        <section className="w-full py-24 snap-start overflow-hidden">
          <div className="flex gap-6 max-w-[1068px] mx-auto">
            <div className="grid grow grid-cols-2 gap-6">
              {[{ name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              { name: "Andrew", role: "Copywriting", avatar: "https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/637070e73b9c9d4cac1d0eb7_a912d10e9cdc35788801463bb33d831c.webp" },
              ].map(item => <InstructorItem {...item} key={item.name} />)}
            </div>
            <div className="p-6 w-2/5">
              <div className="prose text-black text-lg tracking-wider">
                <div className="text-3xl font-bold uppercase">Our instructor </div>
                <div className="w-1/2 bg-yellow-400 h-0.5 mt-3"></div>
                <p>
                  We call our instructors “Professors”, but their teachings come from experience, not theory.
                </p>
                <p>
                  All of our Professors made well over <strong> $1M in profits</strong> using the methods they teach in The Real World.
                </p>
                <p>
                  And their mission is to guide and mentor you throughout your business journey. Every single day.
                </p>
                <button className="hover:scale-105 transition-transform uppercase block bg-yellow-500 border px-8 py-4 text-lg font-bold mt-8 rounded-md text-white">Join now</button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="section_1"
          className="relative snap-end scroll-pb-16 overflow-hidden"
        >
          <div className="w-full mt-[10%] h-[90vh] bg-right-bottom bg-cover bg-[linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.3)),url('https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/633b4aa550de1323716feb31_matrix2000x2000.webp')]" />
          <article className="absolute prose h-full tracking-wider p-8 top-0 items-center gap-8 text-white flex flex-col left-1/2 rounded-md -translate-x-1/2 w-2/5 bg-zinc-900 border-2 border-yellow-500">
            <div className="text-3xl font-bold p-4 border-b-[3px] border-yellow-500 uppercase text-center">
              What is <br /> the real world?
            </div>
            <div className="text-xl text-neutral-300">
              <p>
                The Real World is a global community of like-minded individuals
                striving to acquire an abundance of wealth.{" "}
              </p>
              <p>
                We provide our members with advanced education and mentoring from
                multimillionaire experts.
              </p>
              <p>
                Our fully independent learning platform is designed to break
                people free from the Matrix.
              </p>
            </div>
          </article>
          <div className="absolute z-50 bottom-0 w-full">
            <div className="w-full h-16 bg-gradient-to-t from-zinc-900"></div>
            <div className="py-6 text-center text-2xl font-bold h-full text-white bg-zinc-900">
              <div className="py-3">The choice is yours, Neo.</div>
              <div className="py-3">Do you want to escape or not?</div>
              <div className="py-4 flex gap-4 justify-center">
                <button className="uppercase from-blue-400 to-blue-900 bg-gradient-to-r px-4 py-2 hover:scale-105 transition-transform rounded-md">Go to Netflix</button>
                <button className="uppercase px-4 py-2 rounded-md to-red-400 from-red-900 hover:scale-105 bg-gradient-to-l transition-transform">Join the real world</button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full snap-start overflow-hidden">
          <div className="max-w-[1068px] mx-auto">
            <div className="flex items-center justify-center my-6">
              <div>
                <div className="text-2xl font-bold">FAQ</div>
                <div className="h-0.5 w-full bg-yellow-500" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  question: "How quickly will I make my money back?", answer: <div>
                    It depends on how seriously you take The Real World.
                    But many students made their money back in a couple of weeks.
                  </div>
                },
                {
                  question: "How quickly will I make my money back?", answer: <div>
                    It depends on how seriously you take The Real World.
                    But many students made their money back in a couple of weeks.
                  </div>
                },
                {
                  question: "How quickly will I make my money back?", answer: <div>
                    It depends on how seriously you take The Real World.
                    But many students made their money back in a couple of weeks.
                  </div>
                },
                {
                  question: "How quickly will I make my money back?", answer: <div>
                    It depends on how seriously you take The Real World.
                    But many students made their money back in a couple of weeks.
                  </div>
                },
              ].map(item => <FAQItem {...item} />)}
            </div>
            <div></div>
          </div>
          <button className="hover:scale-105 transition-transform uppercase mx-auto block bg-yellow-500 border px-8 py-4 text-lg font-bold mt-8 rounded-md text-white">Join now</button>
        </section>
        <footer className="bg-zinc-900 text-lg snap-end mt-12 h-[256px] p-4 w-full">
          <div className="max-w-[1068px] mx-auto text-neutral-100 p-4">
            <ul>
              <li><Link to="/login" className="underline">Log In</Link></li>
              <li><Link to="/login" className="underline">Manage Membership</Link></li>
              <li><Link to="/login" className="underline">Contact Us</Link></li>
              <li><Link to="/login" className="underline">Term and Conditions</Link></li>
              <li><Link to="/login" className="underline">Privacy Policy</Link></li>
            </ul>
            <div className="mt-8">Need help? Contact <b><u><a href="mailto:support@therealworld.ai">support@therealworld.ai</a></u></b></div>
          </div>
        </footer>
      </div>
    </>
  );
}
