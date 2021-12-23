import React from 'react'
export const Btn = (props) => {
    return (
        <>
        <div className={props.styles} onClick={props.onClick} data-value={props.value}>
          {props.label}
        </div>
        </>
    )
}
