export default function WidthLimiter ({ children, paddingAll }) {
  // padding default is only in x
  // if paddingAll is true, padding is in x and y
  return (
    <div className={paddingAll ? "lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto p-8" : "lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[100rem] mx-auto px-8"}>
      { children }
    </div>
  )
}