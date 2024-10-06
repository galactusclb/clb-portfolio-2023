import { FC } from 'react'
import RevealHeading from '../common/RevealHeading';

interface DiscoverMoreProps {

}

const DiscoverMore: FC<DiscoverMoreProps> = ({ }) => {

    const links: string[] = ['Web Development', 'UI Design', 'Illustration']

    return (
        <div className='flex flex-col justify-center gap-12'>
            <div className='flex items-center gap-4'>
                <span className='block flex-grow h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)25%,rgba(231,229,228,1)75%,rgba(0,0,0,0)100%)]'></span>
                <RevealHeading>
                    <h3 className='text-3xl'>Discover More</h3>
                </RevealHeading>
                <span className='block flex-grow h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)25%,rgba(231,229,228,1)75%,rgba(0,0,0,0)100%)]'></span>
            </div>

            <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
                {
                    links?.map((item, key) => (
                        <a className='relative flex gap-2 cursor-pointer group' key={key}>
                            <p className='relative flex flex-col gap-[2px] w-fit uppercase group-hover:text-red-600 duration-200'>
                                {item}
                                <span className='block w-full h-[2px] bg-black rounded-lg group-hover:bg-red-600 duration-200'></span>
                            </p>
                            <div className="flex items-center justify-center font-sans text-white duration-200 bg-black rounded-full group-hover:bg-red-600 w-7 h-7">/</div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default DiscoverMore;