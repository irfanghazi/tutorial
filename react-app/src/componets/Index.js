import React from 'react'
import Counter1 from './HigherOrderComponent/Counter1'
import Counter2 from './HigherOrderComponent/Counter2'

import Parent from './ChildToParent/Parent'
import ParentContext from './context-hook/ParentContext'
import ProgressContent from './ProgressBar/ProgressContent'
import Charts from './Charts/Charts'
import ParentCopy from './childParent/parent'


import Count1 from './Higher/Counter1'
import Count2 from './Higher/Counter2'

import InfiniteScroll from "./InfiniteScrolling/InfiniteScroll"

const Index = () => {
  return (
    <>
      {/* for HOC */}
      {/* <Counter1/>
   <Counter2/> */}

      {/* For child to parent */}
      {/* <Parent/> */}


      {/* For context api */}
      {/* <ParentContext/> */}

   /* Progress Bar */
      <ProgressContent />

      {/* Charts */}
      {/* <Charts/> */}



      {/* <ParentCopy /> */}
      {/* <Count1/>
      <Count2/> */}

      <InfiniteScroll />

    </>
  )
}

export default Index