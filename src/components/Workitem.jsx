const Workitem = ({title, description, detail}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
                <span className="my-1 text-sm font-normal leading-none text-stone-400">{description}</span>
            </p>
            <span className="my-2 text-base font-normal text-stone-500">{detail}</span>
        </li>
    </ol>
  )
}

export default Workitem