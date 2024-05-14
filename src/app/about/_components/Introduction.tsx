import { Button } from "@/components/ui/button";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 bg-zinc-900 p-6 rounded-xl">
      <div className="flex flex-col gap-2 w-full">
        <h2 className=" text-xl uppercase font-display">
          Hi, I&apos;m Daniel Madeley
        </h2>
        <h3 className="text-start w-full font-bold uppercase font-display text-xs text-zinc-400">
          Assistant Structural Engineer
        </h3>
      </div>

      <p className="text-sm">
        I&apos;m a structural engineer who loves to build things and ship on the
        side. I am currently working in South-Wales as an Assistant Structural
        Engineer and Freelance Web Developer.
      </p>
      <p className="text-sm">
        My goal is to merge both my skillsets and become a computational
        designer.
      </p>
      <Button
        variant="default"
        className="w-fit bg-zinc-950 hover:bg-zinc-950/70"
      >
        <Link href="/contact">Contact me</Link>
      </Button>
    </div>
  );
};

export default Introduction;