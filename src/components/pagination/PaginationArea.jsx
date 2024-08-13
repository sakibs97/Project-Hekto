import Container from "../Container"


const PaginationArea = () => {
    return (
        <Container className='text-center'>
            <nav aria-label="Page navigation ">
                <ul className="inline-flex space-x-[5px] h-10">
                    <li>
                        <a className="flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5]">Previous</a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center px-[10px] pt-[2px] pb-[3px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5]">1</a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center px-[10px] pt-[2px] pb-[3px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5]">2</a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center leading-tight px-[10px] pt-[4px] pb-[5px] border-[2px] border-[#E0D3F5] rounded-lg font-lato font-semibold text-[16px] text-[#E0D3F5]">Next</a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default PaginationArea