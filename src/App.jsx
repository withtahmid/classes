import { useEffect, useState } from 'react';
import './App.css';
import { getSortedClasses } from './utils';
import Card from './components/Card';
function App() {
  const [ courseList, setCourseList ] =  useState([]);
  useEffect(()=> {
    setCourseList(getSortedClasses());
  }, []);
  return (
    <div className='px-3 py-3'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8'>
    {
      courseList.map(course => {
        return (
            <Card key= { course.code } course = { course } />
        );
      })
    }
    </div>
 </div>
  )
}

export default App
