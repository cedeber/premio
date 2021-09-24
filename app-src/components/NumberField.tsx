import React from "react";
import { useNumberFieldState } from "@react-stately/numberfield";
import { useLocale } from "@react-aria/i18n";
import { useButton } from "@react-aria/button";
import { useRef } from "react";
import { useNumberField } from "react-aria";
import type { NumberFieldProps } from "@react-types/numberfield";

const NumberField: React.FC<NumberFieldProps> = (props) => {
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });
    const inputRef = useRef<HTMLInputElement>(null);
    const incrRef = useRef<HTMLButtonElement>(null);
    const decRef = useRef<HTMLButtonElement>(null);
    const { labelProps, groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
        useNumberField(props, state, inputRef);

    const { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef);
    const { buttonProps: decrementProps } = useButton(decrementButtonProps, decRef);

    return (
        <div>
            <label {...labelProps}>{props.label}</label>
            <div {...groupProps}>
                <button {...decrementProps} ref={incrRef}>
                    -
                </button>
                <input {...inputProps} ref={inputRef} />
                <button {...incrementProps} ref={decRef}>
                    +
                </button>
            </div>
        </div>
    );
};

export { NumberField };
