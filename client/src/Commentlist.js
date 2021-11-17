import React,{useState, useEffect} from "react";
import axios from "axios";


export default( {postId })=>{

    const [comment, setComment] = useState([])
    
    const fetchComments= async ()=>{
        const results= await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComment(results.data)

        
    }

    useEffect(() => {
        fetchComments();
        
    }, [])
    

    const renderedComment= comment.map(comm=>{
      return <li key={comm.id}>{comm.content}</li>   
    })
    
    
    return(
        <div>
            {renderedComment}

        </div>
    )
}

