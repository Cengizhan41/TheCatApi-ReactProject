import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import FetchCategories from '../Pages/FetchPages/FetchCategories'
import AxiosCategories from '../Pages/AxiosPages/AxiosCategories'
import FetchCategoryDetail from '../Pages/FetchPages/FetchCategoryDetail'
import FetchSearchResults from '../Pages/FetchSearchResults'
import AxiosCategoryDetail from '../Pages/AxiosPages/AxiosCategoryDetail'
import SearchResults from '../Pages/SearchResults'


function ToDoRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/fetchcat' element={ <FetchCategories/> }/>
        <Route path='/catbreed/:category' element={ <FetchCategoryDetail/>} />
        <Route path='/dogbreed/:category' element={ <AxiosCategoryDetail/>} />
        <Route path='/axioscat' element={ <AxiosCategories/> }/>
        <Route path='/results' element={ <FetchSearchResults/> }/>
        <Route path='/search' element={ <SearchResults/> }/>
        <Route path='*' element={ <NotFound/> }/>
    </Routes>
  )
}

export default ToDoRoutes