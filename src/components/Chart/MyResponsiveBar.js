import { ResponsiveBar } from '@nivo/bar';

export default function MyResponsiveBar({ data = {} }) {
  // console.log(data);

  return (
    <ResponsiveBar
      data={data}
      keys={[data[0].chartKey]}     // use prop
      indexBy="region"
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ datum: 'data.color' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '지역',
        legendPosition: 'middle',
        legendOffset: 35,
      }}
      axisLeft={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: data[0].chartKey,     // use prop
        legendPosition: 'middle',
        legendOffset: -55,
      }}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      labelTextColor={{ from: 'color', modifiers: [['opacity', '0']] }}
        // legends={[
        //   {
        //     dataFrom: 'keys',
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     justify: false,
        //     translateX: 120,
        //     translateY: 0,
        //     itemsSpacing: 2,
        //     itemWidth: 100,
        //     itemHeight: 20,
        //     itemDirection: 'left-to-right',
        //     itemOpacity: 0.85,
        //     symbolSize: 20,
        //     effects: [
        //       {
        //         on: 'hover',
        //         style: {
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}