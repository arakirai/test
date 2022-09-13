import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// const RegisterData = () = {
//     const title = 'ユーザー登録';
//     return(
//         Menu name = { title }
//              h1ユーザー登録h1
//          Menu


//     );
// };

// const userListData = async() = {
//     let res = await axios.get(http49.212.200.1598080apiuserlist);
//     console.log(res);
//     res = res.data;
//     return res;
// };

const data = { name: "", age: "" };
let RegisterData = async () => {
    let res = await axios.post("http://49.212.200.159:8080/api/user/add", data);
    console.log(res);
    res = res.data;
    // return res;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" d
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="名前"
                    data name=""
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="年齢"
                    data age=""
                />

                    />
            </div>
        </Box>
    );



}
    export default RegisterData;
