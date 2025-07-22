import CallToAction from "@/components/landingpage/callToAction";
import Experience from "@/components/landingpage/expereince";
import DeveloperHero from "@/components/landingpage/hero";
import { Hobbies } from "@/components/landingpage/hobbies";
import Projects from "@/components/projects/projects";


export default function Home() {
  return (
   <div>
    <DeveloperHero/>
     <Hobbies/>
    <Experience/>
    <Projects/>
    <CallToAction/>
   </div>
  );
}
