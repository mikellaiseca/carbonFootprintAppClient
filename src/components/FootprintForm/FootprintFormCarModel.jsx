import footprintServiceFront from '../../services/footprintFront.service'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import TestFilter from './TestFilter'


const FootprintFormCarModel = ({ findModelId }) => {

    const [makerData, setMakerData] = useState([])
    const [modelData, setModelData] = useState({
        vehicle_make_id: ''

    })
    const [data, setData] = useState([])



    useEffect(() => {

        getMakerNames()

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

        const { name, value } = e.target

        setModelData({

            vehicle_make_id: value
        })

    }


    const getModelNames = () => {


        footprintServiceFront
            .getCarModels(modelData.vehicle_make_id)
            .then(response => setData(response.data))
            .catch(err => console.log(err))

    }


    return (
        <>

            <Form.Select onChange={handleInputChange} aria-label="Default select example" name="vehicle_make_id" value={modelData.vehicle_make_id} type="text">

                <option>Open this select menu</option>

                {makerData.map((elm, i) => {
                    return (
                        <option key={i} value={elm.data.id}>{elm.data.attributes.name}</option>
                    )
                })
                }
            </Form.Select >

            <TestFilter models={data} findModelId={findModelId} />


        </>
    )

}

export default FootprintFormCarModel
