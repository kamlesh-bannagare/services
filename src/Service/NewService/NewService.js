import './NewService.css'
import FormService from './FormService';
import Button from '@mui/material/Button';
import { useState } from 'react'

const NewService = (props) => {

     const [formHide, setFormHide] = useState(false)

     const onSaveHandler = (data) => {
          const serviceData = { ...data, id: Math.random().toString() }
          props.onAddService(serviceData);
     }
     const showFormHandler = () => {
          setFormHide(true)
     }
     return (
          <div className="NewService">
               {
                    formHide === true ?
                         <FormService onSave={onSaveHandler} formHide={setFormHide} />
                         : <Button type="button" onClick={showFormHandler} variant="outlined">
                              Add Service
                         </Button>
               }
          </div>
     )
}
export default NewService;