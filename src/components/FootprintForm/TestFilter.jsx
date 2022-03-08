import { useState, useEffect } from 'react'


const TestFilter = ({ models, findModelId }) => {

    const [allModels, setAllModels] = useState([])
    const [q, setQ] = useState("")
    const [suggestions, setSuggestions] = useState([])


    const handleInputChange = e => {
        let matches = []
        if (q.length > 0) {
            matches = allModels.filter(model => {
                const regex = new RegExp(`${q}`, 'gi')
                console.log(regex)
                return model.data.attributes.name.match(regex)
            })
        }
        console.log(matches)
        setSuggestions(matches)

        setQ(e.target.value)
    }

    useEffect(() => {

        search()

    }, [q])

    function search() {

        setAllModels(models)
        console.log(allModels)

        let matchingCar = allModels.filter(model => (model.data.attributes.name.toLowerCase() === (q)))

        return matchingCar.length > 0 && (findModelId(matchingCar[0].data.id))

    }



    return (
        <>
            <div>
                I am the TestFilter
            </div>

            <input type="text" value={q} onChange={handleInputChange} autoComplete="on" />


            <div>
                Hello
                {suggestions?.map(suggestion => suggestion.data.attributes.name)}
            </div>




        </>
    )
}

export default TestFilter