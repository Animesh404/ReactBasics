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
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = newFeedback =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback = id => {
        if(window.confirm('Are you Sure you want to Delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    return (
        <Router>
        <Header />
        <div className="container"> 
        <Routes>
        <Route exact path='/' element={
            <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
        }>
            

            {/* <Route path='/about'>This is the about route</Route> */}
            </Route>

            <Route path='/about' element={<AboutPage />}/>
        </Routes>

        
        </div>
        <AboutIconLink />
        </Router>
    )
}
export default App

// <>fragments(empty brackets)</>
// can't use class as its a reserved word instead className
// <label htmlFor=""></label>