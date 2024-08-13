

const NameProLatest = ({ name, price, pricex }) => {
    return (
        <section>
            <div className="flex items-center justify-between pt-4">
                <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">{name}</h5>
                <div className="flex flex-wrap items-center">
                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">{price}</p>
                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">{pricex}</p>
                </div>
            </div>
        </section>
    )
}

export default NameProLatest