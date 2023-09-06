import React from 'react'

const InputType = ({value,onChange,name,type,label,labelFor}) => {
  return (
    <>
        <div className="mb-3">
            <label htmlFor={labelFor} className="form-label">{label}</label>
            <input
             type={type}
             className="form-control" 
             name={name}
             value={value}
             onChange={onchange}
             />
                        
        </div>
    </>
  )
}

export default InputType