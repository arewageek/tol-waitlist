import WaitlistForm from "@/components/forms/WaitlistForm";
import WaitlistForm2 from "@/components/forms/WaitlistForm2";
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
    <main className="flex min-h-screen flex-col items-center justify-between max-w-screen p-0">
      <div className="min-h-screen w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 w-full lg:px-12 py-5 h-full">

          <div className="w-full p-2 lg:px-[140px] lg:w-1/2 flex flex-col gap-y-10 items-center">

            <h2 className="text-4xl font-bold text-center font-[montserrat]">
              Start connecting with web3 Builders today!
            </h2>

            <WaitlistForm2 />
          </div>

          <div>
            <img src={"/phone.png"} alt="" className="w-[500pt] lg:w-[300pt]" />
          </div>
        </div>
      </div>
    </main>
  );
}
