import { FC } from 'react'
import RevealHeading from '../common/RevealHeading';

interface FormItemProps {
    label: string;
    type?: 'text' | 'email' | 'textarea';
    isRequired?: boolean;
    placeholder?: string;
}

const FormItem: FC<FormItemProps> = ({ type = 'text', label, isRequired, placeholder }) => {
    return (
        <div className='flex flex-col gap-4'>
            <RevealHeading>
                <label htmlFor={label} className='w-fit cursor-auto'>{label} {isRequired ? '*' : null}</label>
            </RevealHeading>

            {
                type !== 'textarea' ? (
                    <input id={label} type="text" className='bg-transparent font-sans placeholder:font-sans text-lg py-3 border-b-2 px-3' placeholder={placeholder} />
                ) : (
                    <textarea id={label} className='bg-transparent font-sans placeholder:font-sans text-lg py-3 border-b-2 px-3' rows={4} placeholder={placeholder} />
                )
            }
        </div>
    )
}

export default FormItem;