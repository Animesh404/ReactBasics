// const App = () => {
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id: 1, text: 'Comment One'},
//         {id: 2, text: 'Comment Two'},
//         {id: 3, text: 'Comment Three'},

//     ]

//     const loading = false
//     const showComments = true
//     const commentBox = (<div className="comments">
//     <h3>Comments ({comments.length})</h3>
//     <ul>
//         {comments.map((comment, index)=>
//             <li key={index}>{comment.text}</li>
//         )}
//     </ul>
//     </div>)

//     if(loading) return <h1>Loading...</h1>

//     return (
//         <div className="container"> 
//             <h1>{title.toUpperCase()}</h1> 
//             <p>{body} </p>

//             {/* {showComments ? (<div className="comments">
//                 <h3>Comments ({comments.length})</h3>
//                 <ul>
//                     {comments.map((comment, index)=>
//                         <li key={index}>{comment.text}</li>
//                     )}
//                 </ul>
//             </div>) : null} */}
//             {showComments &&  commentBox}

//         </div>
        
//     )
// }

import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"


const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = id => {
        if(window.confirm('Are you Sure you want to Delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}
export default App

// <>fragments(empty brackets)</>
// can't use class as its a reserved word instead className
// <label htmlFor=""></label>