import { ResponsivePie } from '@nivo/pie'
import { Container } from 'react-bootstrap'
import './GraphicsUser.css'


const MyResponsivePie = ({ totalCarFootprints, totalFlightFootprints, totalShippingFootprints }) => {
    return (
        < Container className='pie-chart' >
            <ResponsivePie
                theme={{
                    "fontSize": 15,
                    "tooltip": {
                        "container": {
                            "background": "#ffffff",
                            "color": "#000",
                            "fontSize": 13
                        },
                    },
                }}
                data={[
                    {
                        "id": "Car Footprint",
                        "label": "Car",
                        "value": totalCarFootprints,
                        "color": "hsl(41, 70%, 50%)"
                    },
                    {
                        "id": "Flight Footprint",
                        "label": "Flight",
                        "value": totalFlightFootprints,
                        "color": "hsl(165, 70%, 50%)"
                    },
                    {
                        "id": "Shipping Footprint",
                        "label": "Shipping",
                        "value": totalShippingFootprints,
                        "color": "hsl(165, 70%, 50%)"
                    }]}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                enableArcLabels={false}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Car Footprint'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Flight Footprint'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'Shipping Footprint'
                        },
                        id: 'dots'
                    },
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 5,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#fff',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ],
                    }
                ]}
            />

        </Container >

    )
}

export default MyResponsivePie