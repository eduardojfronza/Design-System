

export type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...res}: ButtonProps) => {

    const generalStyle = ' rounded-md  px-6 py-2 ';
    const Btn = (classes: string) => {
        return ( 
            <button 
                className={`${generalStyle} ${classes} ${className}`}
                disabled={disabled}
                {...res}
            >
                {children}
            </button>
        )
    }

    return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white')
}

export default Button