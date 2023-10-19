export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary'; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

    
function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
    switch(variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white'
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary'
        case 'tertiary':
            return disabled ? 'bg-disabled text-disabled' : 'text-tertiary'
        default:
            return disabled ? '' : ''
    }
}

const Button = ({ variant = 'primary', children, className, disabled, ...res}: ButtonProps) => {
    return ( 
        <button 
            className={` rounded-md  px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
            disabled={disabled}
            {...res}
        >
            {children}
        </button>
    )
}

export default Button