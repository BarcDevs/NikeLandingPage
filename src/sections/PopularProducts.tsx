import {products} from '../constants'
import PopularProductCard from '../components/cards/PopularProductCard.tsx'

const PopularProducts = ({}) => {
    return (
        <section
            id={'products'}
            className={'max-container max-sm:mt-12'}
        >
            <div className="flex flex-col justify-start gap-5">
                <h2 className={'font-palanquin text-4xl font-bold'}>
                    Our <span className={'text-coral-red'}>Popular</span> Products
                </h2>
                <p className={'mt-2 max-w-lg font-montserrat text-slate-gray'}>Shop our premium-quality collection
                    of cozy and stylish products. Find comfort and innovation in our bedding, furniture, and
                    accessories. Comfort and innovation at your fingertips.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                {products.map(product => (
                    <PopularProductCard key={product.name} {...product}/>
                ))}

            </div>

        </section>
    )
}

export default PopularProducts