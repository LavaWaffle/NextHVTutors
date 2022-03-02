export default function WidthLimiter ({ children }) {
  return (
    <div className="lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto px-8">
      { children }
    </div>
  )
}