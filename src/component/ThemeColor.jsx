import React, { useState } from "react";
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { ChangeColor } from "../redux/theme";
import { BackgroundColor } from "../redux/bgcolor";


const ThemeColor = () => {

    const bgcolor = useSelector((state) => state.bgcolor.value)
    const dispatch = useDispatch();
    const [Color, setColor] = useState();
    const [bgColor, setBgColor] = useState();
    return (
        <div style={{ backgroundColor: bgcolor }}>
            <div className="mt-2">
                <Stack spacing={2} direction="row">
                    <TextField
                        label="Enter color"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                        onChange={(event) => { setColor(event.target.value) }}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => { dispatch(ChangeColor(Color)) }}
                    >Change Color</Button>

                </Stack>
                <div className="mt-2">
                    <Stack spacing={2} direction="row">

                        <TextField
                            label="Enter color"
                            helperText="Change your backgroud color"
                            id="filled-size-small"
                            variant="filled"
                            size="small"
                            onChange={(event) => { setBgColor(event.target.value) }}
                        />

                        <Button
                            variant="outlined"
                            onClick={() => { dispatch(BackgroundColor(bgColor)) }}
                        >Change Color</Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default ThemeColor;