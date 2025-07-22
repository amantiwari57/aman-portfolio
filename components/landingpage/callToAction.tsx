import { Cta4 } from "../ui/cta";


const CallToAction = () => {
  return (
    <div id="contact">
      <Cta4
        title="Let's Build Something Amazing Together"
        description="Got a project in mind? Let's turn your ideas into scalable, high-performance applications that users will love."
        buttonText="Get In Touch"
        buttonUrl="mailto:amantiwari7057@gmail.com"
        items={[
          "Full Stack Development",
          "Cloud Architecture & AWS",
          "React & Node.js Expert",
          "Microservices & APIs",
          "Performance Optimization"
        ]}
      />
    </div>
  );
};

export default CallToAction;
