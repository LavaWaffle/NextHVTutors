import Head from "next/head";
import Image from "next/image";
import WidthLimiter from "../components/WidthLimiter";

export default function About() {
  return (
    <>
    <Head>
      <title>HV Tutors - about</title>
    </Head>
    {/* hero */}
    <section className="bg-violet-400 py-10">
      {/* width limiter */}
      <WidthLimiter>
        {/* title */}
        <div className="flex justify-center items-center">
          <h1 className="text-teal-300 font-title text-4xl text-center font-bold mb-3">
            About HV Tutors
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* left */}
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="text-violet-50 text-3xl text-center md:text-left pb-5">
					    We here at HV Tutors believe that all students deserve the ability to get help with their education at an affordable price. We are independently run at Hopewell which allows us to make sure our customers are able to get the education they want!
				    </p>

            <p className="text-violet-50 text-3xl text-center md:text-left">
					    HV Tutors is open on weekdays after school hours from 3pm to 9pm and open from 8am to 9pm on weekends. Tutor sessions last for 1 hour, 90 minutes, or 2 hours. We offer tutoring at your specified location or at Mercer County Library
				    </p>
          </div>

          {/* right */}
          <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/2 mt-5 sm:mt-0">
            <div className="group relative sm:w-5/6 sm:h-5/6 overflow-hidden rounded-lg shadow-lg transition duration-200 ease-in-out">
              <div className="aspect-10/9 w-full object-cover overflow-hidden transition duration-200 ease-in-out group-hover:scale-110 group-hover:blur-[5px]">
                <Image 
                  src="/HVEntrance.jpg"
                  height="2547"
                  width="2547"  
                />
              </div>
              <div className="absolute inset-0 text-4xl text-teal-700 text-bold p-4 bg-white flex justify-center items-center transition duration-200 ease-in-out opacity-0 group-hover:opacity-50">
          	    Hopewell Valley Central High School Entrance
              </div>
            </div>
          </div>
        </div>
      </WidthLimiter>
  </section>
    </>
  )
}