import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import './FootprintForm.css'
import Autocomplete from '@material-ui/lab/Autocomplete';


const TestFilter = ({ models, findModelId }) => {


    const [allModels, setAllModels] = useState([])
    const [q, setQ] = useState("")
    const [suggestions, setSuggestions] = useState([])



    const onSugestHandler = (mod) => {
        setQ(mod)
        setSuggestions([])
        search(mod)

        let matchingCar = allModels.filter(model => (model.data.attributes.name.toLowerCase() == mod.toLowerCase()))

        return matchingCar.length > 0 && (findModelId(matchingCar[0].data.id))

    }

    const handleInputChange = e => {
        let matches = []

        if (q.length > 0) {
            matches = allModels?.filter(model => {
                const regex = new RegExp(`${q}`, 'gi')
                console.log(regex)
                return model.data.attributes.name.match(regex)
            })
        }

        setSuggestions(matches)

        setQ(e.target.value)
    }

    useEffect(() => {

        search()

    }, [q])


    function search(model) {

        setAllModels(models)

    }

    const top100Films = ['The Godfather', 'Pulp Fiction']




    return (
        <>
            <Form.Group className='testFilter'>

                <Form.Label>Enter your favourite model</Form.Label>

                <Form.Control type="text" value={q} onChange={handleInputChange} autoComplete="on" />

                {suggestions?.map((suggestion, i) =>

                    <div key={i} className='suggestions'
                        onClick={() => onSugestHandler(suggestion.data.attributes.name)}
                        onBlur={() => {
                            setTimeout(() => {
                                setSuggestions([])

                            }, 100)
                        }}
                    >
                        {suggestion.data.attributes.name}

                    </div>

                )}




            </Form.Group>


        </>
    )
}

export default TestFilter