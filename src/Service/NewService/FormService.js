import './FormService.css'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});


const FormService = (props) => {
    let [form, setForm] = useState({ userTitle: "", userAmount: "", userDate: "", userImage: "" })
    const [isValid, setIsValid] = useState(true)
    const titleChangedHandler = (events) => {
        setForm((prevState) => {
            return { ...prevState, userTitle: events.target.value }
        })
        if (events.target.value.trim().length > 0) {
            setIsValid(true)
        }
    }

    const amountChangedHandler = (events) => {
        setForm((prevState) => {
            return { ...prevState, userAmount: events.target.value }
        })
        if (events.target.value.trim().length > 0) {
            setIsValid(true)
        }
    }

    const dateChangedHandler = (events) => {
        setForm((prevState) => {
            return { ...prevState, userDate: events.target.value }
        })
        if (events.target.value.trim().length > 0) {
            setIsValid(true)
        }
    }

    const imageChangedHandler = (events) => {
        setForm((prevState) => {
            return { ...prevState, userImage: events.target.value }
        })

    }
    const submitHandler = (events) => {
        events.preventDefault()
        if (form.userTitle.trim().length === 0) {
            setIsValid(false)
            return
        }
        const Service = { title: form.userTitle, amount: form.userAmount, date: form.userDate, image: form.userImage }
        props.onSave(Service)
        props.formHide(false)
    }
    const onClickCancleHandler = () => {
        props.formHide(false)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
        >

            {
                isValid ?
                    <TextField className="TextField" id="1" label="Title" variant="outlined" onChange={titleChangedHandler} />
                    : <TextField error className="TextField" id="1" label="Title" variant="outlined" onChange={titleChangedHandler} />
            }

            {
                isValid ?
                    <TextField className="TextField" id="2" label="Amount" variant="outlined" onChange={amountChangedHandler} />
                    : <TextField errpr className="TextField" id="2" label="Amount" variant="outlined" onChange={amountChangedHandler} />
            }

            {
                isValid ?
                    <TextField className="TextField" type="date" id="3" label="Date" variant="outlined" onChange={dateChangedHandler} />
                    : <TextField error className="TextField" type="date" id="3" label="Date" variant="outlined" onChange={dateChangedHandler} />
            }

            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={imageChangedHandler} />
                <Button tyoe="submit" variant="contained" component="span">
                    Upload Image
                </Button>
            </label>
            <Button type="submit" variant="outlined">Submit</Button>
            <Button type="button" variant="outlined" color="error" onClick={onClickCancleHandler}>Cancle</Button>
        </Box>
    );
}

export default FormService;
