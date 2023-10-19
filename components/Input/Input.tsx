export type InputProps = {
    label?: string;
    multiline?: boolean;
} & (
    React.TextareaHTMLAttributes<HTMLTextAreaElement> | React.InputHTMLAttributes<HTMLInputElement>
)



const Input = (props:InputProps) => { 
    if(props.multiline) {
        return <textarea {...props as  React.TextareaHTMLAttributes<HTMLTextAreaElement>}/>
    } else {
        return <input {...props as React.InputHTMLAttributes<HTMLInputElement>}/>
    }

}

export default Input