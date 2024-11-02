import Reveal from "@components/Reveal"
import { experience } from "@constants/constants"
import { styles } from "@constants/styles"
import { GoProject } from "react-icons/go"

const Experiences = () => {
  
  return (
    <section id="experiences" className={`${styles.padding} ${styles.paddingY} h-[700px] sm:h-full dark:text-white mt-10 sm:mt-0`}>
      <span className="absolute my-5 right-0 text-[20px] sm:text-[30px] mr-10">
            <GoProject/>
      </span>
      <div className="flex flex-col">
            <div className="flex">
              <Reveal>
                  <h3 className="flex font-outfit text-5xl sm:text-6xl font-black dark:text-white">
                    Experiences
                  </h3>
              </Reveal>
            </div>
        </div>
        <div className="flex">
            <Reveal>
              <p className="border-l-2 font-outfit text-xl pl-5 dark:text-white mt-5">
                <span className="text-[#FF2E63] dark:text-green-600">
                  Experiences & Journey
                </span> <br /> 
                There are my experiences and my career journey
              </p>
            </Reveal>
        </div>

      <div className="flex flex-col sm:items-center mt-10">
        <div className="flex flex-col md:flex-row p-5 gap-5 w-full">
          {experience.map((exp, idx) => (
            <div key={idx} className="flex flex-col p-2 border-2 dark:border-green-500 rounded dark:bg-zinc-800 shadow-xl dark:shadow-slate-200/10 w-full lg:w-[500px]">
              <div className="flex gap-2 items-center mb-2">
                <Reveal>
                  <>
                    <img src={exp.logo} alt={exp.title} className="w-[40px] h-[40px] rounded-full" />
                    <p className={'font-poppins text-[13px] sm:text-[16px] mt-2'}>
                      {exp.title}
                    </p>
                  </>
                </Reveal>
              </div>
              <Reveal>
                <p className="font-outfit hidden sm:block text-[#256e66] text-[13px]">
                  {exp.role}
                </p>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="flex flex-col p-5">
          <div className="p-2 border-2 dark:border-green-500 rounded dark:bg-zinc-800 shadow-xl dark:shadow-slate-200/10 lg:w-[500px] w-auto">
            <Reveal>
              <>
                <h4 className="text-3xl font-outfit text-[#FF2E63] dark:text-green-600 font-black animate-pulse">
                  Here
                </h4>
                <p className="font-poppins text-lg">
                  My next experience🌌 with you 
                </p>
              </>
            </Reveal>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experiences