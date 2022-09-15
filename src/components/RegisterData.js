import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Menu from "../Menu";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const RegisterData = async () => {
    let res = await axios.post("http://49.212.200.159:8080/api/user/add", data);
    console.log(res);
    res = res.data;
};
let data = { name: "", age: "" };

const RegisterData2 = () => {


    const title = "ユーザ一覧";


    React.useEffect(() => {
        (async () => {
            const listData = await RegisterData();
            console.log(listData);
        })();
    }, []);

    return (
        <Menu name={title}>
            <h1>ユーザー登録</h1>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="名前"
                        defaultValue={data.name}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="年齢"
                        defaultValue={data.age}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                    
                </div>

            </Box>
        </Menu>
    );
}




export default RegisterData2;
