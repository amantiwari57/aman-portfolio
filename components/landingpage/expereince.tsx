import react from "react";
import { Timeline } from "../ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Mar 2025 - Jul 2025",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold mb-2">
            Lead Full Stack Developer
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3">
            Easemyexpo, Bangalore
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm space-y-2">
            <li>• Directed a 4-engineer team to deliver 2 SaaS platforms using full-stack JavaScript, Node.js, and Python</li>
            <li>• Achieved 50% faster release cycles and boosted customer retention by 20%</li>
            <li>• Developed scalable microservices with Node.js, MongoDB, and Redis</li>
            <li>• Reduced infrastructure costs by 30% through Dockerized deployments on DigitalOcean</li>
            <li>• Ensured 99.9% API uptime with 10K+ daily requests while improving latency by 20%</li>
            <li>• Integrated 3 legacy systems to enable unified API endpoints</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Oct 2024 - Jan 2025",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold mb-2">
            Frontend Developer Intern
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3">
            Golden Rich Finance Pvt. Ltd.
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm space-y-2">
            <li>• Engineered 5+ responsive pages using Next.js 13, React, and TypeScript</li>
            <li>• Boosted mobile engagement by 22% and reduced bug reports by 45%</li>
            <li>• Optimized load speed by 35% through refined data fetching with React Query</li>
            <li>• Implemented advanced filtering and pagination features</li>
            <li>• Contributed to cross-platform UI system by standardizing 15+ reusable components</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Apr 2024 - May 2024",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold mb-2">
            Backend Developer Intern
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3">
            Talecto Pvt. Ltd.
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm space-y-2">
            <li>• Developed REST APIs and mobile backend logic with Node.js serving 1,000+ users</li>
            <li>• Achieved under 200ms latency with 100% unit test coverage using Jest</li>
            <li>• Integrated Redis caching and MongoDB indexing, improving database performance by 60%</li>
            <li>• Created internal onboarding guide and Swagger documentation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 - 2025",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold mb-2">
            B.Tech, Information Technology
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3">
            Indraprastha Engineering College
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
            Focused on software development, algorithms, and modern web technologies. 
            Built strong foundation in full-stack development and cloud computing.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div id="about" className="flex w-full">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
