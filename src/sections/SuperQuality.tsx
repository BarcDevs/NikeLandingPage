import Button from '../components/Button.tsx'
import {shoe8} from '../assets/images'

const SuperQuality = ({}) => {
    return (
        <section
            id="about-us"
            className={'max-container flex w-full justify-between gap-10 italic max-lg:flex-col'}
        >
            <div className="flex flex-1 flex-col">
                <h2 className={'font-palanquin text-4xl font-bold capitalize lg:max-w-lg'}>
                    We Provide You <span className={'text-coral-red'}>
                        Super
                    </span> <span className={'text-coral-red'}>
                        Quality
                    </span> Shoes
                </h2>

                <p className={'info-text mt-4 lg:max-w-lg'}>
                    Ensuring premium comfort and styles, our shoes are made with the highest quality materials and
                    construction. Our shoes are designed to elevate your experience, providing you with unmatched
                    quality, innovation, and touch of elegance.
                </p>
                <p className={'info-text mt-6 lg:max-w-lg'}>
                    Our dedication to detail and excellence ensures your satisfaction.
                </p>

                <div className="mt-11">
                    <Button
                        label={'View Details'}
                        onClick={() => {
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <img
                    src={shoe8}
                    alt="shoe"
                    width={570}
                    height={522}
                    className={'object-contain'}
                />
            </div>
        </section>
    )
}

export default SuperQuality