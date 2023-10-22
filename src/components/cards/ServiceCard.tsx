import {Service} from '../../types'

type ServiceCardProps = Service

const ServiceCard = ({imgURL, label, subtext}: ServiceCardProps) => {
    return (
        <div
            className={'w-full flex-1 rounded-[20px] px-10 py-16 shadow-3xl shadow-zinc-300 sm:w-[350px] sm:min-w-[350px]'}>
            <div className="flex-center-col h-11 w-11 rounded-full bg-coral-red">
                <img
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                />
            </div>
            <h3 className={'mt-5 font-palanquin text-3xl font-bold leading-normal'}>
                {label}
            </h3>
            <p className={'mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'}>
                {subtext}
            </p>
        </div>
    )
}

export default ServiceCard