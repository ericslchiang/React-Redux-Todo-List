import React from 'react';

const Todo = ({id, text, onClick}) => {
    // if (!isEdit){
    //     return(
    //         <li
    //             onClick={onClick(text, id)}
    //         >
    //             {text}
    //         </li>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             <form onSubmit={e => {
    //                 e.preventDefault()
    //                 if (!input.value.trim()) {
    //                 return
    //                 }
    //                 dispatch(addTodo(input.value))
    //                 input.value = ''
    //             }}>
    //                 <input ref={node => {
    //                     input = node
    //                 }} />
    //             </form>
    //         </div>
    //     )
    // }
    // return(
    //     <li
    //         onClick={onClick}
    //     >
    //         {text}
    //     </li>
    // )
}

export default Todo;
