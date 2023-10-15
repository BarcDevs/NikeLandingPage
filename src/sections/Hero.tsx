import Button from '../components/Button.tsx'
// @ts-ignore
import {arrowRight} from '../assets/icons'
import {statistics} from '../constants'

const Hero = ({}) => {
    return (
        <section
            className={'max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row'}
            id="home"
        >
            <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
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

            </div>
        </section>
    )
}

export default Hero