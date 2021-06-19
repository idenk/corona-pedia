import { ResponsivePie } from '@nivo/pie';

export default function MyResponsivePie({ data = {} }) {

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
      innerRadius={0.8}
      padAngle={2}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      // colors={{ scheme: 'nivo' }}
      colors={{ datum: 'data.color' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsStraightLength={29}
      arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['opacity', '0']] }}
      motionConfig="default"
      // legends= {[
      //   {
      //     anchor: 'right',
      //     direction: 'column',
      //     justify: false,
      //     translateX: 25,
      //     translateY: 73,
      //     itemsSpacing: 5,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: '#999',
      //     itemDirection: 'left-to-right',
      //     itemOpacity: 1,
      //     symbolSize: 18,
      //     symbolShape: 'circle',
      //     effects: [
      //       {
      //         on: 'hover',
      //         style: {
      //           itemTextColor: '#000',
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
}