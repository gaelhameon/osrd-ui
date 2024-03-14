import React, { useState} from 'react';
import { Gear, RequiredInput } from '@osrd-project/ui-icons';
import cx from 'classnames';
import useKeyPress from './hooks/useKeyPress';

type InputAffixProps = {
    content:string
    small?: boolean;
    type: "leading" | "trailing";
}

const InputAffix: React.FC<InputAffixProps> = ({
content,
type,
small
}) => {
    return (
        <div className={cx(`${type}-content-wrapper`, { "small":small })}>
            <span className={`${type}-content`}>{content}</span>
        </div>
    )
}


type InputProps = {
    id:string;
    label: string;
    type: "text" | "number";
    value?: number | string;
    hint?: string;
    leadingContent?:string;
    trailingContent?:string;
    checkIndicator?:boolean;
    required?:boolean;
    small?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}

//TODO Tag
//Est ce qu'on veut focus lorsqu'on clique sur prefix/suffixe de l'input ?
// - box shadow de l'input
// - small leading content input line-height: 16px -> 8px
// - icon checkIndicator -> ok 
// - input number avec les arrows. -> va lire sur le sujet
// - le périmètre de style du focus reste uniquement sur l'input ou bien il ira jusqu'au leading/trailing content? au checkIndicator ?
// - background color de l'input, n'a pas de couleur défini.rgba(0, 0, 0, 0.01) disabled aussi rgba(0, 0, 0, 0.01);
// - tu n'as pas donné un identifiant à la couleur #006DFF utilisé sur le caret lorsqu'on focus l'input
// - concernant le mouse focus, est ce que c'est une bonne idée, de focus un input au mouseover, parce que du coup, si le focus était sur un autre composant (un autre input, un checkbox, etc...), il sera perdu sur ce dernier au détriment de celui sur lequel on fait le mouseover
// 

// virer padding top et bottom et garder le padding latéral à 12 du leading content 

const Input: React.FC<InputProps> = ({ 
    id,
    label,
    type,
    value: initialValue,
    hint,
    leadingContent,
    trailingContent,
    checkIndicator,
    required,
    disabled,
    readOnly,
    small
}) => {
    const [value, setValue] = useState(initialValue);
    const [focusViaKeyboard, setFocusViaKeyboard] = useState(false);
    useKeyPress("Tab", async () => setFocusViaKeyboard(true));
    
    return (
        <div className={"custom-input"}>

            {/* LABEL */}
            <div className={cx("label-wrapper", { 'small':small, 'has-hint': hint })}>
                {required && <span className="required"> <RequiredInput/> </span>}
                <label
                    className={cx("label", {
                        'small':small,
                        'disabled': disabled,
                        'read-only': readOnly
                    })}
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>

            {/* HINT */}
            {hint && <span className={cx("hint", { 'small':small })}>{hint}</span>}
            
            {/* INPUT WRAPPER AND CHECK INDICATOR */}
            <div className="input-wrapper-and-check-indicator">
                <div className={cx("input-wrapper", {'small':small, 'focused': focusViaKeyboard})}>
                    {leadingContent && <InputAffix content={leadingContent} type="leading" small={small} />}
                    <input 
                        className={cx('input', {
                            'with-leading-only': leadingContent && !trailingContent,
                            'with-trailing-only': trailingContent && !leadingContent,
                            'with-leading-and-trailing': leadingContent && trailingContent,
                            'small':small,
                        })}
                        id={id}
                        type={type}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={disabled}
                        readOnly={readOnly}
                        onBlur={() => setFocusViaKeyboard(false)}
                        data-role="taginput"
                    />
                    {trailingContent && <InputAffix content={trailingContent} type="trailing" small={small} />}
                </div>
                {checkIndicator && <span className={cx("checkIndicator", { "small":small })} ><Gear size={small ? 'sm' : 'lg'}/></span>}
            </div>

        </div>
    )
}

export default Input;

