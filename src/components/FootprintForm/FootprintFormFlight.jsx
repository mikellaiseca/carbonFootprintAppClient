import footprintServiceBack from '../../services/footprintBack.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import airportData from '../../airpots.data.json'

const FootprintFormFlight = () => {

    const [footprintForm, setFootprintForm] = useState({
        passengers: "",
        departure_airport: "",
        destination_airport: "",
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setFootprintForm({
            ...footprintForm,
            [name]: value
        })
    }

    const findDeparture = (id) => {
        setFootprintForm({
            ...footprintForm,
            departure_airport: id.iata_code
        })
    }

    const findDestination = (id) => {

        setFootprintForm({
            ...footprintForm,
            destination_airport: id.iata_code
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        footprintServiceBack
            .getFlightFootprint(footprintForm)
            .then(() => {
                navigate('/')
            })

    }

    return (
        <Container className='footprintFormCar'>

            <h3>Flight Footprint</h3>

            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3 formLabel autcomplete-flight">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control className='input' type="text" name="passengers" value={footprintForm.passengers} onChange={handleInputChange} />
                </Form.Group>

                <Autocomplete
                    className="formLabel autcomplete-flight"
                    options={airportData}
                    renderInput={suggestion => (
                        <TextField className='input'{...suggestion} label="departure_airport" variant="outlined" />
                    )}
                    getOptionLabel={suggestion => suggestion.iata_code + " " + suggestion.airport_name + " " + "(" + suggestion.country_name + ")"}
                    onChange={(_event, newDepartureAirport) => {
                        findDeparture(newDepartureAirport)
                    }}

                />

                <Autocomplete
                    className="formLabel autcomplete-flight"
                    options={airportData}
                    renderInput={suggestion => (
                        <TextField className='input'{...suggestion} label="destination_airport" variant="outlined" />
                    )}
                    getOptionLabel={suggestion => suggestion.iata_code + " " + suggestion.airport_name + " " + "(" + suggestion.country_name + ")"}
                    onChange={(_event, newDestinationAirport) => {
                        findDestination(newDestinationAirport)
                    }}

                />

                <Button className='button' variant="dark" type="submit" style={{ width: '100%' }}>Calculate</Button>

            </Form>

        </Container>
    )


}

export default FootprintFormFlight