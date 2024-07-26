import WaitlistForm from "@/components/forms/WaitlistForm";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import GridPattern from "@/components/magicui/grid-pattern";
import Meteors from "@/components/magicui/meteors";
import ShineBorder from "@/components/magicui/shine-border";
import ShinyButton from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronRight, Disc, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#181818] to-black max-w-screen p-0">
      {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
          height={100}
        />
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
          Grid Pattern
        </p>
      </div> */}

      <div className="min-h-screen w-full py-20">
        <div className="flex items-center justify-center w-full lg:px-12 py-5 h-full flex-col">

          <div className="w-full p-2 lg:px-[30px] lg:w-2/3 flex flex-col gap-y-4 items-center">

            <ShineBorder
              className="relative flex py-8 h-auto w-full overflow-y-auto border-transparent flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl gap-y-4"
              color={["#66B2FF", "#3366CC", "#00188F"]}
            >
              <div className="rounded-full p-3 bg-[#181818] text-gray-300 cursorpoin">
                <Zap height={30} width={30} />
              </div>

              <div className="w-full text-gray-300 text-center">
                <p className="text-sm font-semibold text-white/70 pb-4">
                  The Open Lab
                </p>
                <AnimatedGradientText className="bg-transparent rounded-none">
                  <h2
                    className={cn(
                      `md:text-7xl text-5xl font-bold text-white inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                  >
                    Join our waitlist
                  </h2>
                </AnimatedGradientText>
              </div>

              <div className="w-full lg:w-1/2 px-4 z-50 text-gray-200">
                <WaitlistForm />
              </div>
            </ShineBorder>
          </div>
        </div>
      </div>
    </main>
  );
}
