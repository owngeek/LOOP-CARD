import React from 'react'
import FbBtnComponent from'../component/FbBtnComponent'
import fbbtnobject from'../component/fbbtnobject'
import '../component/fbstyle.css'

function FbComponent(props){
    return(
        <div className='feed'>
<h4 className='title'>{props.vivek.title}</h4>
<h5 className='description'>{props.vivek.description}</h5>
{props.children}
<img className='img_feed' src={props.vivek.image}/>
<FbBtnComponent like={fbbtnobject.like} share={fbbtnobject.share} comment={fbbtnobject.comment}/>
        </div>
    )
}
export default FbComponent