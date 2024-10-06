import { FC } from 'react'
import FormItem from './FormItem';
import { Button } from '@components/ui';


const ContactForm: FC = () => {
    return (
        <form className='w-full flex flex-col gap-10'>
            <FormItem label="Your name" isRequired={true} placeholder='John Deo' />
            <FormItem label="Your email" isRequired={true} placeholder='Johndeo@email.com' />
            <FormItem type='textarea' label="Message" isRequired={true} placeholder='Whats in your mind! Text It Here.' />
            <div className="flex justify-end">
                <Button type='submit'>
                    Send It!
                </Button>
            </div>
        </form>
    )
}

export default ContactForm;