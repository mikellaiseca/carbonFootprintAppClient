import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import footprintServiceBack from '../../services/footprintBack.service'
import './GraphicsUser.css'

const MyResponsiveLine = ({ profileId }) => {

    const [carFootprints, setCarFootprint] = useState([])

    // useEffect(() => {
    //     loadCo2footprints()
    //     console.log(carFootprints);
    // }, [])

    const loadCo2footprints = () => {

        footprintServiceBack
            .getCarCustomFootprint(profileId)
            .then(({ data }) => {
                console.log(data)
                setCarFootprint(data)
            })
            .catch(err => console.log(err))
        console.log(carFootprints);
    }

    if (profileId) {
        loadCo2footprints()

    }
    console.log(carFootprints)
    return (
        < Container className="pie-chart" >
            <ResponsiveLine
                data={
                    [
                        {
                            "x": "plane",
                            "y": 8
                        },
                        {
                            "x": "helicopter",
                            "y": 169
                        }

                    ]
                }

                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Dates',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Co2',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Container >
    )
}

export default MyResponsiveLine