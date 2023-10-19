import Button from '../components/Button.tsx'
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants'
import ShoeCard from '../components/ShoeCard.tsx'
import {useState} from 'react'
import {Shoe} from '../types'

const Hero = ({}) => {
    const [currentShoeDisplayed, setCurrentShoeDisplayed] = useState<Shoe>(shoes[0])
    const changeBigShoe = (shoe: Shoe) => {
        setCurrentShoeDisplayed(shoe)
    }

    return (
        <section
            className={'max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row'}
            id="home"
        >
            <section
                className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
                <p className={'font-montserrat text-xl text-coral-red'}>
                    Our Summer Collection
                </p>

                <h1 className={'mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'}>
                    <span className={'relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white'}>
                        The New Arrivals
                    </span>
                    <br/>
                    <span className={'mt-3 inline-block text-coral-red'}>
                        Nike
                    </span> Shoes
                </h1>

                <p className={'mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm'}>
                    Discover stylish Nike arrivals , quality, comfort and innovation for your active lifestyle.
                </p>

                <Button
                    label={'Shop Now'}
                    iconUrl={arrowRight}
                    onClick={() => {
                    }}
                />

                <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
                    {statistics.map(stat => (
                        <div key={stat.label}>
                            <p className={'font-palanquin text-4xl font-bold'}>{stat.value}</p>
                            <p className={'font-montserrat leading-7 text-slate-gray'}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="flex-center relative flex-1 bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
                <img
                    src={currentShoeDisplayed.bigShoe}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className={'relative z-10 object-contain'}
                />

                {/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
                <section className={'absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6'}>
                    {shoes.map(shoe => (
                        <ShoeCard
                            key={shoe.name}
                            {...{shoe, currentShoeDisplayed, changeBigShoe}}
                        />
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Hero