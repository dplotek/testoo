import { useId, useState } from "preact/hooks"
import { default as TawilwindDatePicker } from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"

interface DatepickerProps {
  label: string
  options?: IOptions
}

const Datepicker = ({ label, options }: DatepickerProps) => {
  const id = useId()
  const [show, setShow] = useState<boolean>(false)
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }
  const defaultOption: IOptions = {
    todayBtn: false,
    clearBtn: false,
    language: "pl",
    inputIdProp: id
  }

  return (
    <div>
      <label for={id} className="block mb-2 text-sm text-white">
        {label}
      </label>
      <TawilwindDatePicker
        options={{ ...defaultOption, ...options }}
        show={show}
        onChange={handleChange}
        setShow={handleClose}
      />
    </div>
  )
}
export default Datepicker