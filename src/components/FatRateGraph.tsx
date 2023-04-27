import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useState, FormEvent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataPoint {
  date: string;
  fatRate: number;
}

const FatRateGraph: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const date = (form.elements.namedItem('date') as HTMLInputElement).value;
    const fatRate = parseFloat((form.elements.namedItem('fatRate') as HTMLInputElement).value);

    setData([...data, { date, fatRate }]);
    form.reset();
  };

  return (
    <Box
     textAlign={"center"}>
      <h1>体脂肪率グラフ</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">日付:</label>
        <Input 
        type="date" id="date" name="date" required />
        <br />
        <label htmlFor="fatRate">体脂肪率:</label>
        <Input 
        type="number" id="fatRate" name="fatRate" step="0.1" required 
        mt={"10px"}/>
        <Button type="submit">追加</Button>
      </form>
      <Flex
      justifyContent="center" 
      alignItems="center"
      textAlign={"center"}
      mt={"20px"}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend  payload={[{ value: '体脂肪率', type: 'line', color: '#8884d8' }]}/>
          <Line type="monotone" dataKey="fatRate" stroke="#8884d8" />
        </LineChart>
        </Flex>
    </Box>
  );
};

export default FatRateGraph;



