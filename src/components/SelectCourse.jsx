import { useEffect, useState } from "react"

function SelectCourse() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
        .then(res => res.json())
        .then(json => (setCourses(json), console.log(json)))
    }
    fetchData()
  }, [])

  return (
    <>
      <label>Courses:</label>
      <select>
        {courses.map((course) => (
          <option value="" key={course.id}>{course.name}</option>
        ))}
      </select>
    </>
  )
}

export default SelectCourse
