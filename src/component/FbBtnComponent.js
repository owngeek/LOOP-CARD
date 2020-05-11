import React from 'react'
function FbBtnComponent(props){
    return(
        <div>
     
            <button type='submit'>{props.like}</button>
            <button type='submit'>{props.share}</button>
            <button type='submit'>{props.comment}</button>
        </div>
    )
}
export default FbBtnComponent