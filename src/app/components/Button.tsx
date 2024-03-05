import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactElement;
    variant?: 'default' | 'transparent' | 'submit' | 'proceed' | 'cancel'
    defaultStyle?: string
    size?: 'default' | 'small'
}
export const Button = (props: ButtonProps) => {
    const {variant} = props

    const style = "rounded-md font-bold flex justify-center items-center gap-3 p-2"

    switch(variant){
        case 'transparent':
            return <TransparentButton defaultStyle={style} {...props} />
        case 'submit':
            return <SubmitButton defaultStyle={style} {...props} />
        case 'proceed':
            return <ProceedButton defaultStyle={style} {...props} />
        case 'cancel':
            return <CancelButton defaultStyle={style} {...props} />
        default:
            return <DefaultButton defaultStyle={style} {...props} /> 
    }
}

export const DefaultButton = (props: ButtonProps) => {
    let {children, icon, defaultStyle, size} = props

    if(size === 'default') defaultStyle += 'w-52'

    return (
        <button
        {...props}
        className={`${defaultStyle} border-2 border-gray-500 text-white text-2xl w-52`}>
            <span>
                {children}
            </span>
            {icon && cloneElement(icon, { className: 'fill-white w-7 h-7'})}
        </button>
    )
}

export const TransparentButton = () => {
    return <button>Transparente</button>
}
export const SubmitButton = () => {
    return <button>Submeter</button>
}
export const ProceedButton = () => {
    return <button>Proceder</button>
}
export const CancelButton = () => {
    return <button>Cancelar</button>
}
