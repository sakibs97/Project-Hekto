

const SingleBlogPagination = () => {
    return (
        <div className="flex justify-between border-[2px] border-[#F7F8FB] bg-[#F7F8FB]">
            <div className="group">
                <a className="flex items-center justify-center px-4 h-10 me-3 font-medium font-lato text-[17px] text-[#8A8FB9] group-hover:text-[#FF38B0] ease-in-out duration-300">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180 text-[#8A8FB9] group-hover:text-[#FF38B0] ease-in-out duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </a>
            </div>
            <div className="group">
                <a className="flex items-center justify-center px-4 h-10 font-medium font-lato text-[17px] text-[#8A8FB9] group-hover:text-[#FF38B0] ease-in-out duration-300">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180 text-[#8A8FB9] group-hover:text-[#FF38B0] ease-in-out duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SingleBlogPagination