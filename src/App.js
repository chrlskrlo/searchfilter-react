import './input.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';

import JSONDATA from './MOCK_DATA.json'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ThemeColor from './component/ThemeColor';


function App() {
  const theme = useSelector((state) => state.theme.value)
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='flex justify-center align-center'>
      <div className='mt-2.5 text-center font-serif' >
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField onChange={event => {
            setSearchTerm(event.target.value)
          }}
            fullWidth label="Search..."
            id="fullWidth" />
          <ThemeColor />
          {JSONDATA.filter((val) => {
            if (searchTerm == '') {
              return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <div key={key}>
                <p style={{ color: theme }} className='m-2 text-xl'>{val.first_name}</p>
              </div>
            )
          })}
        </Box>
      </div>
    </div>
  );
}

export default App;
