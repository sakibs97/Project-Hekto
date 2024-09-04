/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const PaginationArea = ({ pageNumber, paginate, pageStart }) => {

    const handleNext = () => {
        if (pageStart < pageNumber.length) {
            paginate(pageStart);
        }
    };

    const handlePrevious = () => {
        if (pageStart > 1) {
            paginate(pageStart - 2);
        }
    };

    return (
        <nav aria-label="Page navigation" className="text-end">
            <ul className="inline-flex flex-wrap space-x-[5px] h-10">
                {pageNumber.length > 0 && (
                    <li>
                        <a
                            className={`flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] cursor-pointer ${pageStart === 1 ? 'bg-[#1389FF] text-white' : 'bg-[#FB2E86] text-white'
                                }`}
                            onClick={handlePrevious}
                        >
                            Previous
                        </a>
                    </li>
                )}

                {pageNumber.map((item, i) => (
                    <li key={i} onClick={() => paginate(item)}>
                        <a
                            className={`${pageStart === item + 1 ? 'text-white bg-[#FB2E86]' : 'text-white bg-[#1389FF]'
                                } flex items-center justify-center px-[10px] pt-[2px] pb-[3px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] cursor-pointer`}
                        >
                            {item + 1}
                        </a>
                    </li>
                ))}

                {pageNumber.length > 0 && (
                    <li>
                        <a
                            className={`flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] cursor-pointer ${pageStart === pageNumber.length ? 'text-[#FFF] cursor-not-allowed bg-[#1389FF]' : 'text-[#FFF] bg-[#FB2E86]'
                                }`}
                            onClick={handleNext}
                        >
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default PaginationArea;
