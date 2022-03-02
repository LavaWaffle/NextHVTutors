import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ThumbnailCard({ data }) {
  const { title, slug, thumbnail, grayThumbnail } = data.fields

  const [ img, setImg ] = useState(`https:${ thumbnail.fields.file.url }`)
  const handleEnter = () => {
    setImg(`https:${ grayThumbnail.fields.file.url }`)
  }
  const handleLeave = () => {
    setImg(`https:${ thumbnail.fields.file.url }`)
  }
  return (
    <Link href={slug}><a onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="group bg-violet-300 hover:bg-violet-200 rounded-xl p-3 hover:-translate-y-1 transition">
      <h2 className="text-center font-rubik text-2xl text-teal-50 group-hover:text-teal-100 transition">{ title }</h2>
      <div className="h-32 rounded-lg overflow-hidden border-2 border-teal-50 hover:border-teal-100 transition ease-in-out">
        <Image 
          id={data.sys.id}
          src={img}
          width="110"
          height="125"
        />
      </div>
    </a></Link>
  )
}