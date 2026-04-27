export default function Button({ children, className }) {
  return (
    <button
      className={`px-7.5 py-2.5 rounded-[10px] font-PoppinsMedium text-lg text-white bg-[#7A643F]/80 hover:bg-[#7A643F] cursor-pointer transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
