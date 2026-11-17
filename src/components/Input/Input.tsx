import { InputHTMLAttributes, forwardRef, useId, useRef, useState, useImperativeHandle } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);
    const [hasValue, setHasValue] = useState(Boolean(rest.defaultValue));
    const filled = rest.value !== undefined ? String(rest.value).length > 0 : hasValue;
    const clear = () => {
      const input = inputRef.current;
      if (!input) return;
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      setHasValue(false);
      input.focus();
    };
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const describedBy = error
      ? `${inputId}-error`
      : hint
        ? `${inputId}-hint`
        : undefined;

    const classes = ['fm-input', error && 'fm-input--error', className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="fm-input-field">
        <div className="fm-input-control">
          <input
            ref={inputRef}
            id={inputId}
            className={classes}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            {...rest}
            onChange={(event) => {
              setHasValue(event.target.value.length > 0);
              rest.onChange?.(event);
            }}
            placeholder={label ? ' ' : rest.placeholder}
          />
          {label && (
            <label className="fm-input-label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {filled && !rest.disabled && !rest.readOnly && (
            <button
              className="fm-input-clear"
              type="button"
              aria-label={`Clear ${label ?? 'input'}`}
              onClick={clear}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
        {error && (
          <p className="fm-input-error" id={`${inputId}-error`} role="alert">
            {error}
          </p>
        )}
        {!error && hint && (
          <p className="fm-input-hint" id={`${inputId}-hint`}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
