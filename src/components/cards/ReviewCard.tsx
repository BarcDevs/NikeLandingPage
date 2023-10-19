import {Review} from '../../types'
import {star} from '../../assets/icons'

type ReviewCardProps = Review

const ReviewCard = ({imgURL, customerName, rating, feedback}: ReviewCardProps) => {
    return (
        <div className={'flex-center-col'}>
            <img
                src={imgURL}
                alt="customer"
                className={'h-[120px] w-[120px] rounded-full object-cover'}
            />
            <p className={'info-text mt-6 max-w-sm text-center'}>
                {feedback}
            </p>
            <div className={'flex-center mt-3 gap-2.5'}>
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                    className={'m-0 object-contain'}
                />
                <p className={'font-montserrat text-xl text-slate-gray'}>
                    {rating.toFixed(1)}
                </p>
            </div>
            <h3 className={'mt-1 text-center font-palanquin text-3xl font-bold'}>
                {customerName}
            </h3>
        </div>
    )
}

export default ReviewCard