import { FC } from 'react'
import RevealHeading from '../common/RevealHeading';
import LinkWrapper from '../common/LinkWrapper';

const DiscoverMore: FC = () => {

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
                        <LinkWrapper key={key} title={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default DiscoverMore;