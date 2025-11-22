import { Link } from "react-router"

function LandingPage() {
  // const [courses, setCourses] = useState({})

  // function getCourses(courses) {
  //   console.log("Parent", courses)
  //   setCourses(courses)
  // }

  return (
    <>
      <button><Link to="/CreateNotes">Create notes</Link></button>
      <button><Link to="/ListNotes">List notes</Link></button>
      <button><Link to="/AddCourses">Add courses</Link></button>
    </>
  )
}

export default LandingPage
