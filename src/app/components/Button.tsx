import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactElement;
    variant?: 'default' | 'transparent' | 'submit' | 'proceed' | 'cancel'
    defaultStyle?: string
    size?: 'default' | 'small' | 'full'
}
export const Button = (props: ButtonProps) => {
    const {variant} = props

    const style = "rounded-md font-bold flex justify-center items-center gap-3 p-2"

    switch(variant){
        case 'transparent':
            return <TransparentButton defaultStyle={style} {...props} size={props?.size ?? "default"} />
        case 'submit':
            return <SubmitButton defaultStyle={style} {...props} size={props?.size ?? "default"} />
        case 'proceed':
            return <ProceedButton defaultStyle={style} {...props} size={props?.size ?? "default"} />
        case 'cancel':
            return <CancelButton defaultStyle={style} {...props} size={props?.size ?? "default"} />
        default:
            return <DefaultButton defaultStyle={style} {...props} size={props?.size ?? "default"} /> 
    }
}

export const DefaultButton = (props: ButtonProps) => {
    let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += ' w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle} border-2 border-gray-500 text-white text-2xl hover:bg-slate-500`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}

export const TransparentButton = (props: ButtonProps) => {
     let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += ' w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle}  text-white text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}
export const SubmitButton = (props: ButtonProps) => {
     let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += ' w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle} bg-[#43f46a] text-black text-2xl fill-black hover:bg-sky-700`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}
export const ProceedButton = (props: ButtonProps) => {
     let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += ' w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle} border-2 border-[#43f46a] text-white text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}
export const CancelButton = (props: ButtonProps) => {
     let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += ' w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle} bg-[#f45943] text-black text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}
