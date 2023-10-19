type ButtonProps = {
    label: string
    iconUrl?: string
    onClick: () => void
}

const Button = ({label, iconUrl, onClick}: ButtonProps) => {
    return (
        <button
            className={'flex-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-normal text-white hover:bg-coral-red-darker'}
            onClick={onClick}
        >
            {label}

            {iconUrl && <img
                src={iconUrl}
                alt={label}
                className={'ml-2 h-5 w-5 rounded-full'}
            />}
        </button>
    )
}

export default Button