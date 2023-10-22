import {footerLogo} from '../assets/images'
import {footerLinks, socialMedia} from '../constants'
import {copyrightSign} from '../assets/icons'

const Footer = ({}) => {
    return (
        <footer className={'max-container'} id={'footer'}>
            <div className={'flex flex-wrap items-start justify-between gap-20 max-xl:flex-col'}>
                <section className={'flex flex-col items-start'}>
                    <a href="/">
                        <img
                            src={footerLogo}
                            alt="nike"
                            width={150}
                            height={46}
                        />
                    </a>

                    <p className={'mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'}>
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>

                    <div className={'mt-8 flex items-center gap-5'}>
                        {socialMedia.map(icon => (
                            <button className={'flex-center h-12 w-12 rounded-full bg-white'} key={icon.alt}>
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </button>
                        ))}
                    </div>
                </section>

                <section className={'flex flex-1 flex-wrap justify-between gap-20 lg:gap-10'}>
                    {footerLinks.map(section => (
                        <div key={section.title} className={'flex flex-col gap-5'}>
                            <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                                {section.title}
                            </h4>

                            <ul>
                                {section.links.map(link => (
                                    <li key={link.name}
                                        className={'mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'}>
                                        <a href={link.href}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>

            <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
                    <img
                        src={copyrightSign}
                        alt="copyright"
                        width={20}
                        height={20}
                        className={'m-0 rounded-full'}
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className={'cursor-pointer font-montserrat max-sm:mt-2'}>
                    Terms & Conditions
                </p>
            </div>
        </footer>
    )
}

export default Footer