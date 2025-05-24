import React, { useRef, useState } from 'react'

const UI = ({ data, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)
  const [replyText, setReplyText] = useState()
  const inputRef = useRef()

  const handleReply = () => {
    setShowReplyBox(true)
    // it runs immediatly so delay
    setTimeout(() => {
      inputRef.current.focus()
    }, 1)
  }

  const addReplyComment = (e) => {
    setReplyText(e.target.value)
  }

  const saveReplyHandler = (id) => {
    if(replyText){
      addReply(replyText, id)
      setShowReplyBox(false)
    }
  }
  return (
    <>

      <ul>
        <li>{data.comment}
          {/* Show Reply Button */}

          {
            !showReplyBox && (
              <button className='replyBtn' onClick={handleReply}>Reply</button>
            )
          }
        </li>

        {/* Show Input Box and save and cancel Button */}

        {
          showReplyBox && (
            <>
              <input
                type='text'
                placeholder='Type comment'
                onChange={addReplyComment}
                ref={inputRef}
              />

              <div>
                <button className='saveBtn' onClick={() => saveReplyHandler(data.id)} >Save</button>
                <button className='cancelBtn'>Cancel</button>
              </div>
            </>

          )
        }


        {
          data.replies && data.replies.length > 0 && (
            <ul>
              {
                data.replies.map((ele, index) => {
                  return <UI key={ele.id} data={ele} addReply={addReply} />
                })
              }
            </ul>
          )
        }
      </ul>
    </>
  )
}

export default UI