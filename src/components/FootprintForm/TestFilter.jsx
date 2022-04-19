import { useState } from 'react'
import { Form } from 'react-bootstrap'
import './FootprintForm.css'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'


const TestFilter = ({ models, findModelId, isDisabled }) => {

    const [q, setQ] = useState(null)

    const onSugestHandler = (selectedModel) => {

        setQ(selectedModel)

        return findModelId(selectedModel.data.id)
    }

    return (
        <>
            <Form.Group className='testFilter formLabel'>

                <Form.Label className="formLabel">Enter your favourite model </Form.Label>

                <Autocomplete
                    className='input'
                    id="vehicle model"
                    disabled={isDisabled}

                    options={models}
                    renderInput={suggestion => (
                        <TextField className='input' {...suggestion} label="Vehicle Model" variant="outlined" value={q} />
                    )}
                    getOptionLabel={suggestion => suggestion.data.attributes.name + " " + suggestion.data.attributes.year}
                    onChange={(_event, newModel) => {
                        onSugestHandler(newModel)

                    }}
                />
            </Form.Group>

        </>
    )

}

export default TestFilter