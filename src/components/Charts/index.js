import React from 'react';
import { Line, Pie } from '@ant-design/charts';

function ChartComponent({sortedTransactions}) {
    const data = sortedTransactions.map((item)=>{
        return { date: item.date, amount: item.amount };
    });

        const spendingData = sortedTransactions.filter((transaction) => {if(transaction.type=="expense"){
            return {tag: transaction.tag, amount: transaction.amount}
        }}
    );

    let finalSpendings = spendingData.reduce((acc, obj) => {
        let key = obj.tag;
        if(!acc[key]){
            acc[key] = {tag: obj.tag, amount: obj.amount};
        } else {
            acc[key].amount += obj.amount;
        }
        return acc;
    }, {});

    
      const config = {
        data: data,
        width: 900,
        height: 300,
        xField: 'date',
        yField: 'amount',
      };
      const spendingConfig = {
        // data: spendingData,
        data: Object.values(finalSpendings),
        width: 300,
        height: 300,
        angleField: "amount",
        colorField: "tag",
      };

  return (
    <div>
        <div className='charts-wrapper'>
            <div className='charts-boxes'>
                <h2>Your Analytics</h2>
                <Line {...config} />
            </div>
        
            <div className='charts-boxes'>
                <h2>Your Spendings</h2>
                <Pie {...spendingConfig}/>
            </div>
        </div>
    </div>
  );
}

export default ChartComponent