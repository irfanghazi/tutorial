import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import Home from './Routing/Home'
import Navbar from './Routing/Navbar'
// import About from './Routing/About'
import PageNotFound from './Routing/PageNotFound'
import Employee from './Routing/Employee'
import Contact from './Routing/Contact'
import Search from './Routing/Search'
import Comapany from './Routing/NestedRouting/Comapany'
import Admin from './Routing/NestedRouting/Admin'
import Faculty from './Routing/NestedRouting/Faculty'
import Student from './Routing/NestedRouting/Student'
import ProtectedRoute from './Routing/ProtectedRoute'
import Orders from './Routing/Orders'
import Login from './Routing/Login'
import Products from './Pagination/Products'
import ApiPagination from './Pagination/ApiPagination'
import PBar from './Pbar/PBar'
import Post from './scroll/Post'
const About = lazy(() => import('./Routing/About'))


const Index = () => {
  let isAuthenticated = localStorage.getItem('isAuthenticated')
  console.log(isAuthenticated);
  return (
    <>
      {/* for HOC */}
      {/* <Counter1/>
   <Counter2/> */}

      {/* For child to parent */}
      {/* <Parent/> */}


      {/* For context api */}
      {/* <ParentContext/> */}

      {/* <ProgressContent /> */}
      {/* <PBar/> */}

      {/* Charts */}
      {/* <Charts/> */}



      {/* <ParentCopy /> */}
      {/* <Count1/>
      <Count2/> */}

      {/* <InfiniteScroll /> */}
        

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}

          {/*  lazy Loading About  */}
          <Route path="/about" element={
            <Suspense fallback={<>Loading...</>}>
              <About />
            </Suspense>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products" element={<ApiPagination />} />
          <Route path="/employee/:name/:age" element={<Employee />} />
          {/* <Route path='/*' element={<PageNotFound />} /> */}

          {/* Nested Routing */}
          <Route path="/company/" element={<Comapany />} >
            <Route path='admin' element={<Admin />} />
            <Route path='faculty' element={<Faculty />} />
            <Route path='student' element={<Student />} />
          </Route>

          {/* Protected Routes */}
          {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/orders' element={<Orders />} />
          </Route> */}

          <Route path='/orders'
            element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <Orders />
            </ProtectedRoute>} />

          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </Router>
      <Post/>

    </>
  )
}

export default Index