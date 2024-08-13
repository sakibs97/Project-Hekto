

const NameTrendingreusable = ({ name, price, pricex }) => {
    return (
        <section>
            <div className="pt-4 text-center">
                <h5 className="font-jose font-normal text-[16px] text-[#151875]">{name}</h5>
                <div className="flex items-center justify-center">
                    <p className="font-jose font-normal text-[12px] text-[#151875] pr-3">{price}</p>
                    <p className="font-jose font-normal text-[12px] text-[rgb(21,24,117,30%)] line-through">{pricex}</p>
                </div>
            </div>
        </section>
    )
}

export default NameTrendingreusable