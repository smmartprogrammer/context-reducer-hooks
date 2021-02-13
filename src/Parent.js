import React from 'react'
import Child from './Child'

function Parent(props) {
    return (
        <div>
            Raghunathji (Parent)
            <Child num={props.num}  />
        </div>
    )
}


export default Parent
