export default function Button({ children, className }) {
  return (
    <button
      className={`font-PoppinsMedium cursor-pointer rounded-[10px] bg-[#7A643F]/80 px-2.5 py-1.25 text-xs text-white transition-colors hover:bg-[#7A643F] sm:px-5.5 sm:py-2 sm:text-sm md:px-6 md:py-2.5 md:text-lg lg:px-7.5 lg:py-2.5 ${className}`}
    >
      {children}
    </button>
  )
}
