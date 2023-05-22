import React, {FC} from 'react';

type ButtonType = {
    name: string
    handler: () => void
    style: string
    disabled: boolean
}
const Button:FC<ButtonType> = ({
                                          name,
                                          handler,
                                          style,
                                          disabled,
                                      }) => {
    return (
        <button disabled={disabled} onClick={handler} className={style}>{name}</button>
    );
}
export default Button;