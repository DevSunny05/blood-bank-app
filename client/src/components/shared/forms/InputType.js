import React from 'react'

const InputType = ({value,onChange,name,type,labelText,htmlFor}) => {
  return (
    <>
        <div className="mb-3">
            <label htmlFor={htmlFor} className="form-label">{labelText}</label>
            <input
             type={type}
             className="form-control" 
             name={name}
             value={value}
             onChange={onChange}
             />
                        
        </div>
    </>
  )
}

export default InputType