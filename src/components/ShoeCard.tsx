import {Shoe} from '../types'
import {MouseEvent} from 'react'

type ShoeCardProps = {
    shoe: Shoe,
    changeBigShoe: (shoe: Shoe) => void,
    currentShoeDisplayed: Shoe
}

const ShoeCard = ({shoe, changeBigShoe, currentShoeDisplayed}: ShoeCardProps) => {
    const isActive = currentShoeDisplayed === shoe
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!isActive) {
            changeBigShoe(shoe)
        }
    }

    return (
        <button
            className={`rounded-xl border-2 ${isActive ? 'border-coral-red' : 'border-transparent'} `}
            onClick={handleClick}
        >
            <div
                className={' flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40'}>
                <img
                    src={shoe.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className={'object-contain'}
                />
            </div>
        </button>
    )
}

export default ShoeCard