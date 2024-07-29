import React, {useId} from 'react'

function Select({
    label,
    className="",
    options=[],
    ...props
}, ref) {

    const id = useId();

  return (
    <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <select
        {...props}
        className={`${className}`}
        id = {id}
        ref={ref}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select);