import Reveal from "@components/Reveal"
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@components/ui/dialog"
import { Skeleton } from "@components/ui/skeleton"
import { projects } from "@constants/constants"
import { styles } from "@constants/styles"
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { GoWorkflow } from "react-icons/go"
import { FaArrowTurnUp } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";


const Projects = () => {
   return (
      <section id="projects" className={`${styles.padding} ${styles.paddingY} 
      h-full dark:text-white mt-10`}>
         <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoWorkflow/>
         </span>

         <div className="flex">
            <Reveal>
               <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white p-2">
                  Projects
               </h3>
            </Reveal>
         </div>

         <div className="flex">
            <Reveal>
               <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                  <span className="text-[#FF2E63] dark:text-green-600">
                     My Projects
                  </span> <br />
                  Few projects that i&apos;ve been work on so far
               </p>
            </Reveal>
         </div>

         <div className="flex items-center justify-center mt-20 w-full">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
               {projects.map((project) => (
                  <div key={project.title} className="group max-w-[300px] min-h-[360px] flex flex-col p-2 mb-6 border-2 dark:border-green-500 rounded dark:bg-zinc-800 shadow-xl dark:shadow-slate-200/10 gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 duration-200 transition ease-linear">
                     <div>
                        {project.image == undefined ?
                           <Skeleton className="w-[280px] h-[180px]"/> :
                           <img src={project.image} alt={project.title} className="w-[280px] h-[188px] rounded" />
                        }
                     </div>
                     <div>
                        <Reveal>
                           <p className="text-xl font-poppins">{project.title}</p>
                        </Reveal>
                     </div>
                     <div>
                        <Reveal>
                           <p>{project.desc.substring(0, 130).concat(" ...")}</p>
                        </Reveal>
                     </div>
                     <Dialog>
                        <DialogTrigger className="relative flex items-center justify-center top-1.5 w- rounded-t-full text-xs p-1 gap-2 bg-slate-200 dark:bg-zinc-900 group-hover:dark:bg-slate-800 inset-y-4">
                           <span className="text-slate-400 font-medium">Show more</span> <FaArrowTurnUp className="text-slate-400 dark:text-white" />
                        </DialogTrigger>
                        <DialogContent>
                           <DialogTitle>
                              <span className="text-xl font-black font-outfit">
                                 {project.title}
                              </span>
                           </DialogTitle>
                           <DialogHeader>
                              <div className="flex flex-wrap gap-2 text-[14px]">
                              {project.techStack.map((tech) => (
                                 <span key={tech.tags} 
                                 className={`${tech.color} font-outfit`}>
                                    {tech.tags}
                                 </span>
                              ))}
                              </div>
                           </DialogHeader>
                           <DialogDescription>
                              <span>
                                 {project.desc}
                              </span>
                           </DialogDescription>
                           <div className="flex justify-end">
                              <a href={project.link} target="blank">
                                 <span className="text-2xl dark:text-blue-600">
                                    <VscGithub />
                                 </span>
                              </a>
                           </div>
                        </DialogContent>
                     </Dialog>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Projects