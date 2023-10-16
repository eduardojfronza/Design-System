export type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className}: ButtonProps) => {
    return ( 
        <button 
            className={`
                bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-white
             // Background     border-radius paddings
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button