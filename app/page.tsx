import CallToAction from "@/components/landingpage/callToAction";
import Experience from "@/components/landingpage/expereince";
import DeveloperHero from "@/components/landingpage/hero";
import { Hobbies } from "@/components/landingpage/hobbies";
import Projects from "@/components/projects/projects";
import { SmoothCursor } from "@/components/ui/smooth-cursor";


export default function Home() {
  return (
   <div>
    <SmoothCursor/>
    <DeveloperHero/>
     <Hobbies/>
    <Experience/>
    <Projects/>
    <CallToAction/>
   </div>
  );
}
