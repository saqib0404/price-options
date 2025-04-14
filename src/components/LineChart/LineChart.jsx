import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const LineChart = () => {
    const trainerData = [
        { id: 1, name: 'Ayesha', clientsTrained: 30 },
        { id: 2, name: 'Bilal', clientsTrained: 45 },
        { id: 3, name: 'Kiran', clientsTrained: 25 },
        { id: 4, name: 'Danish', clientsTrained: 50 },
        { id: 5, name: 'Zoya', clientsTrained: 35 },
        { id: 6, name: 'Hamza', clientsTrained: 40 },
        { id: 7, name: 'Sara', clientsTrained: 28 },
        { id: 8, name: 'Imran', clientsTrained: 55 },
        { id: 9, name: 'Nadia', clientsTrained: 38 },
        { id: 10, name: 'Faizan', clientsTrained: 42 }
    ];
    return (
        <div className=' w-full'>
            <h3 className="text-xl text-center">Clients Trained</h3>
            <ResponsiveContainer width="100%"height={300} >
                <LChart data={trainerData}>
                    <Line type="monotone" dataKey="clientsTrained" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart