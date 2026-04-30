import ArrowRight from '../../../Icons/ArrowRight.jsx'

export default function BlogCart(blog) {
  const thisBlog = blog.blog
  return (
    <div className="min-h-[350px ] flex cursor-pointer flex-col items-start justify-between rounded-[20px] bg-white px-[11px] pt-[9px] pb-[32px] shadow-lg">
      <div className="w-full">
        <img src={thisBlog.imageUrl} alt="woman with hal bad" className="w-full" />
      </div>
      <div className="my-3.5">{thisBlog.title}</div>
      <div className="flex w-full items-center justify-between pl-2">
        <span className="font-PoppinsMedium text-xs text-[#707786]">
          Category: {thisBlog.category}
        </span>
        <ArrowRight className="mr-3 size-4" />
      </div>
    </div>
  )
}
