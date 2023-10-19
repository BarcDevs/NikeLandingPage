import {Product} from '../../types'
import {star} from '../../assets/icons'

type PopularProductCardProps = Product

const PopularProductCard = ({imgURL, name, price, rating}: PopularProductCardProps) => {
    return (
        <button className={'flex w-full flex-1 flex-col max-sm:w-full items-start'}>
            <img src={imgURL} alt={name} className={'h-[280px] w-[280px] object-contain'}/>
            <div className="mt-4 flex justify-start gap-2.5">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className={'font-montserrat text-xl leading-normal text-slate-gray'}>
                    {rating.toFixed(1)}
                </p>
            </div>
            <h3 className="mt-2 font-palanquin text-2xl font-semibold
                leading-normal">
                {name}
            </h3>
            <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
                {price}
            </p>


        </button>
    )
}

export default PopularProductCard