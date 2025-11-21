import TextBox from "../components/TextBox"
import SelectCourse from "../components/SelectCourse"
import SaveAndBackButtons from "../components/SaveAndBackButtons"

function AddNotesPage() {
  return (
    <>
      Add new notes here

      <SelectCourse />
      <TextBox />
      <SaveAndBackButtons />
    </>
  )
}

export default AddNotesPage
