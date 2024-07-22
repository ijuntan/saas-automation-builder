import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { HeroParallax } from "@/components/global/hero-parallax";
import { LampComponent } from "@/components/global/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";

import { Button } from "@/components/ui/button";

import { clients, products } from "@/lib/constant";
import { CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="
        h-screen w-full bg-neutral-950 rounded-md
        !overflow-visible relative flex flex-col items-center antialiased
      ">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#223_100%)]"/>

        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className='flex items-center justify-center flex-col'>
                <Button
                  size={'lg'}
                  className="
                    p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit
                    border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F]
                    flex items-center justify-center gap-4
                    hover:bg-white hover:shadow-xl hover:shadow-neutral-500 
                    group transition-all duration-500"
                >
                  <span className="
                    bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center
                    font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black"
                  >
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Zuto
                </h1>
              </div>
            } 
          >

          </ContainerScroll>
        </div>
      </section>

      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />

      <section>
        <HeroParallax products={products} />
      </section>

      <section className="mt-[-500px]">
        <LampComponent />

        <div className="
          flex flex-wrap items-center justify-center
          flex-col md:flex-row gap-8 -mt-72
        ">
          <CardContainer className="inter-var">
            <CardBody className="
              bg-gray-50 w-full md:!w-[350px] h-auto p-6 rounded-xl relative group/card p-6
              dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1]
              dark:bg-black dark:border-white/[0.2]
              border border-black/[0.1]
            ">
              <CardItem
                translateZ="40"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />10 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="
              bg-gray-50 w-full md:!w-[350px] h-auto p-6 rounded-xl relative group/card p-6
              dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1]
              dark:bg-black dark:border-white/[0.7]
              border border-black/[0.1]
            ">
              <CardItem
                translateZ="40"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Pro Plan
                <h2 className="text-6xl">$19</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Unlock enhanced capabilities with our Pro plan. Elevate your productivity and automate more tasks effortlessly.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />100 automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    1000 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="
              bg-gray-50 w-full md:!w-[350px] h-auto p-6 rounded-xl relative group/card p-6
              dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1]
              dark:bg-black dark:border-white/[0.2]
              border border-black/[0.1]
            ">
              <CardItem
                translateZ="40"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Premium Plan
                <h2 className="text-6xl">$79</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Dive into our Premium plan for unlimited possibilities. Gain access to advanced features and tailor-made solutions for your automation needs.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
