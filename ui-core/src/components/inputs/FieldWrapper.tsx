import React from 'react';

import cx from 'classnames';

import Hint from './Hint';
import InputStatusIcon from './InputStatusIcon';
import Label from './Label';
import StatusMessage, { type StatusWithMessage } from './StatusMessage';

export type FieldWrapperProps = {
  id: string;
  label?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  statusWithMessage?: StatusWithMessage;
  statusIconPosition?: 'next-to-field' | 'before-status-message';
  small?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const FieldWrapper = ({
  id,
  label,
  hint,
  required,
  disabled,
  statusWithMessage,
  statusIconPosition = 'next-to-field',
  small = false,
  className,
  children,
}: FieldWrapperProps) => {
  const statusClassname = statusWithMessage ? { [statusWithMessage.status]: true } : {};

  return (
    <div className={cx('feed-back', statusClassname, className, { small: small })}>
      <div className="custom-field">
        {/* LABEL AND HINT */}
        {label && (
          <Label
            htmlFor={id}
            text={label}
            required={required}
            hasHint={Boolean(hint)}
            disabled={disabled}
            small={small}
          />
        )}
        {hint && <Hint text={hint} />}

        {/* FIELD WRAPPER AND STATUS ICON */}
        <div className="field-and-status-icon">
          {children}
          {statusWithMessage && statusIconPosition === 'next-to-field' && (
            <InputStatusIcon
              status={statusWithMessage.status}
              small={small}
              className="next-to-field"
            />
          )}
        </div>

        {/* STATUS MESSAGE */}
        {statusWithMessage && (
          <StatusMessage
            statusWithMessage={statusWithMessage}
            showIcon={statusIconPosition === 'before-status-message'}
          />
        )}
      </div>
    </div>
  );
};

export default FieldWrapper;
