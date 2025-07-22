import { Tilt } from "@/components/ui/tilt";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  period: string;
}

function BasicTiltCard({ title, description, technologies, period }: ProjectCardProps) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[370px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 h-full'
      >
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 h-32 flex items-center justify-center'>
          <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
            {title.split(' ').map(word => word[0]).join('').slice(0, 3)}
          </div>
        </div>
        <div className='p-4 flex flex-col flex-grow'>
          <div className='flex justify-between items-start mb-2'>
            <h1 className='font-semibold text-lg leading-snug text-zinc-950 dark:text-zinc-50'>
              {title}
            </h1>
          </div>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-3 flex-grow'>
            {description}
          </p>
          <div className='flex flex-wrap gap-1 mb-3'>
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <p className='text-xs text-zinc-500 dark:text-zinc-500 font-mono'>
            {period}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

function TiltSpotlight() {
  return (
    <div className='aspect-video max-w-sm'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-lg'
      >
        
        <img
          // src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          src=''
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0'
        />
      </Tilt>
      <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
        <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400'>
          2001: A Space Odyssey
        </h3>
        <p className='text-sm text-black dark:text-white'>Stanley Kubrick</p>
      </div>
    </div>
  );
}

export { BasicTiltCard, TiltSpotlight };