import Head from 'next/head'
import Image from 'next/image'

import { createClient } from 'contentful'
import ThumbnailCard from '../components/ThumbnailCard'
import ReviewCard from '../components/ReviewCard'


export async function getStaticProps() {

  const client = createClient({
    space: 'mcgbm1socg24',//process.env.CONTENTFUL_SPACE_ID,
    accessToken: 'L6zPnIjA2mGQDQnCnPHk2QGEB-SczBtYRTO2ZMbQxWM', //process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  
  const thumbRes = await client.getEntries({
    content_type: 'thumbnails',
  })

  const revRes = await client.getEntries({
    content_type: 'reviews',
  })

  return {
    props: {
      thumbnails: thumbRes.items,
      reviews: revRes.items,
    },
  }
}

export default function Home({ thumbnails, reviews }) {
  return (
    <>
    <Head>
      <title>HV Tutors - home</title>
    </Head>
    {/* hero */}
    <section className="bg-violet-400 py-10">
      {/* width limiter */}
      <div className="lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto px-8">
        {/* flex */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0">
          {/* left */}
          <div className="inline-flex flex-col items-center w-full sm:w-1/2">
            <h1 className="text-teal-300 font-title text-4xl text-center font-bold mb-3">Ace your next Test</h1>
            <div className="aspect-420/505 object-cover rounded-lg shadow-xl overflow-hidden">
              <Image 
                src="/smallPerfect.png"
                alt="Perfect Score Exam"
                width="420"
                height="505"
              />
            </div>
          </div>

          {/* right */}
          <div className="inline-flex flex-col items-center w-full sm:w-1/2">
            <h1 className="text-teal-300 font-title text-4xl text-center font-bold mb-3">Get a Tutor Today</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
              {thumbnails.map(thumbnail => (
                <ThumbnailCard key={ thumbnail.sys.id } data={ thumbnail } />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* reviews */}
    <section className="bg-violet-600 py-10 relative">
      {/* width limiter */}
      <div className="lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto px-8">
        {/* title */}
        <div className="flex justify-center items-center">
          <h1 className="text-teal-300 font-title text-4xl text-center font-bold mb-3">
            Reviews
          </h1>
        </div>
        
        {/* open quote */}
        <div className="before:content-['\201c'] before:absolute before:-top-[6%] before:left-[2%] before:text-violet-300 before:text-[250px] before:font-serif">
        </div>
        {/* close quote */}
        <div className="before:content-['\201c'] before:absolute before:-bottom-[10%] sm:before:-bottom-[13%] before:right-[1%] before:text-violet-300 before:text-[250px] before:font-serif before:rotate-180">
        </div>

        {/* grid */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(review => (
            <ReviewCard key={ review.sys.id } data={ review } />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
