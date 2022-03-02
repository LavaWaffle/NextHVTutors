export default function ReviewCard({ data }) {
  const { reviewText, author } = data.fields
  
  return (
    <blockquote className="bg-violet-500 p-5 rounded border-2 border-violet-400">
      <div className="h-full flex flex-col justify-between">
        {/* review */}
        <p className="text-violet-100 text-2xl italic">
          { reviewText }
        </p>
        {/* author */}
        <p before="-" className="text-teal-100 text-2xl text-bold text-right before:content-['\2014\0020']">
          { author }
        </p>
      </div>
    </blockquote>
  )
}
