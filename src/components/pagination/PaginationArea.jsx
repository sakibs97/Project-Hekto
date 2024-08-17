/* eslint-disable react/jsx-key */


const PaginationArea = ({ pageNumber, paginate, pageStart }) => {


    return (
        <nav aria-label="Page navigation" className='text-end'>
            <ul className="inline-flex space-x-[5px] h-10">
                <li>
                    <a className="flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5] cursor-pointer">Previous</a>
                </li>

                {pageNumber.map((item, i) => (
                    <li key={i} onClick={() => paginate(item)}>
                        <a className={`${pageStart === item + 1 ? 'text-black bg-[red]' : 'text-[#E0D3F5] bg-[green]'} flex items-center justify-center px-[10px] pt-[2px] pb-[3px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] cursor-pointer`}>
                            {item + 1}
                        </a>
                    </li>
                ))}

                <li>
                    <a className="flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5] cursor-pointer">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationArea;
