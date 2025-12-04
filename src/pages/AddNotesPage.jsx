import AddNotesPageComponents from "../components/AddNotesPageComponents"
import { useState } from "react"

function AddNotesPage() {
  const [dataFetched, setDataFetched] = useState(false)

  return (
    <>
      <AddNotesPageComponents dataFetched={dataFetched} setDataFetched={setDataFetched} />
    </>
  )
}

export default AddNotesPage
