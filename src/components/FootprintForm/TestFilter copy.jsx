import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import './FootprintForm.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import TextField from '@material-ui/core/TextField';


const TestFilterTest = ({ models, findModelId }) => {

    const [allModels, setAllModels] = useState([])
    const [q, setQ] = useState(null)

    const onSugestHandler = (selectedModel) => {

        setQ(selectedModel)

        return findModelId(selectedModel.data.id)
    }


    useEffect(() => {

        search()

    }, [q])


    function search(model) {

        setAllModels(models)

    }


    return (
        <>
            <Form.Group className='testFilter'>

                <Form.Label>Enter your favourite model</Form.Label>

                <Autocomplete
                    id="vehicle model"
                    options={models}
                    renderInput={suggestion => (
                        <TextField {...suggestion} label="Vehicle Model" variant="outlined" value={q} />
                    )}
                    getOptionLabel={suggestion => suggestion.data.attributes.name}
                    onChange={(_event, newModel) => {
                        onSugestHandler(newModel)

                        console.log(newModel)

                    }}
                />
            </Form.Group>









        </>
    )
}

export default TestFilterTest