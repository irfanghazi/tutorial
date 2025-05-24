import React, { useEffect, useState } from 'react'
import Data from './data'
import UI from "./UI"

const Comments = () => {
  const [comments, setComments] = useState([])
  const [input, setInput] = useState()

  useEffect(() => {
    console.log(Data)
    setComments(Data)
  }, [])

  const newComment = (text) => {
    return {
      id: new Date().getTime(),
      comment: text,
      replies: [

      ]
    }
  }
  const addParentCommentHandler = (e) => {
    let inputText = e.target.value
    setInput(inputText)
  }
  const addCommentHandler = () => {
    if (input) {
      setComments([...comments, newComment(input)])
      setInput("")
    }
  }
  const addReply = (text, parentId,) => {
    const addComment = (comments) => {
      return comments.map((ele) => {
        if (ele?.id == parentId) {
          return { ...ele, replies: [...ele?.replies, newComment(text)] }
        } else if (ele?.replies && ele?.replies.length) {
          return { ...ele, replies: addComment(ele?.replies) }
        }
        return ele
      })
    }
    setComments(addComment(comments))
  }
  return (
    <>
      {/* Top Comment Box */}
      <div className='comment_container'>
        <div>Comments</div>
        <input
          type='text'
          value={input}
          placeholder='Enter Comments'
          onChange={addParentCommentHandler}

        />
        <button onClick={addCommentHandler}>Comment</button>

        {/* Nested Comment Box */}
        {
          comments && comments.map((ele) => {
            return <UI key={ele?.id} data={ele} addReply={addReply} />
          })
        }
      </div>


    </>
  )
}

export default Comments