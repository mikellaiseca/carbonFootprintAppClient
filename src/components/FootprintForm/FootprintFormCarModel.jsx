import footprintServiceFront from '../../services/footprintFront.service'
import { useState, useEffect } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import TestFilter from './TestFilter'


const FootprintFormCarModel = ({ findModelId }) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [makerData, setMakerData] = useState([])
    const [modelData, setModelData] = useState({
        vehicle_make_id: ''
    })
    const [data, setData] = useState([])

    useEffect(() => {

        getMakerNames()
        getModelNames()

    }, [])

    useEffect(() => {

        getModelNames()

    }, [modelData])



    const getMakerNames = () => {

        footprintServiceFront
            .getMaker()
            .then(({ data }) => setMakerData(data))
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {

        const { value } = e.target

        setModelData({
            vehicle_make_id: value
        })
    }


    const getModelNames = () => {

        footprintServiceFront
            .getCarModels(modelData.vehicle_make_id)
            .then(response => {
                setData(response.data)
                response.data.length === undefined ? (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>) :
                    setIsDisabled(false)

            })
            .catch(err => console.log(err))

    }


    return (
        <>
            <Form.Group className="mb-3 formLabel">
                <Form.Label className="formLabel">Select your favourite maker</Form.Label>

                <Form.Select className='input MuiOutlinedInput-notchedOutline' onChange={handleInputChange} name="vehicle_make_id" value={modelData.vehicle_make_id} type="text"  >

                    <option className='input'>Choose a car maker</option>

                    {makerData.map((elm, i) => {
                        return (
                            <option key={i} value={elm.data.id}>{elm.data.attributes.name}</option>
                        )
                    })
                    }
                </Form.Select >
            </Form.Group>

            <TestFilter models={data} findModelId={findModelId} isDisabled={isDisabled} />



        </>
    )

}

export default FootprintFormCarModel
