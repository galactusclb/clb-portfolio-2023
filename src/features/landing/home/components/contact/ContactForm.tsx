import { FC } from 'react'
import FormItem from './FormItem';
import { Button } from '@components/ui';
import PortfolioButton from '../common/PortfolioButton';


const ContactForm: FC = () => {
    return (
        <form className='flex flex-col w-full gap-10'>
            <FormItem label="Your name" isRequired={true} placeholder='John Deo' />
            <FormItem label="Your email" isRequired={true} placeholder='Johndeo@email.com' />
            <FormItem type='textarea' label="Message" isRequired={true} placeholder='Whats in your mind! Text It Here.' />
            <div className="flex justify-end">
                <PortfolioButton variant={"dark"}>
                    Send It!
                </PortfolioButton>
            </div>
        </form>
    )
}

export default ContactForm;