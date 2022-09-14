
import * as React from "react";
import Menu from "../Menu";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";

let Delete = async () => {
    let res = await axios.delete("http://49.212.200.159:8080/api/user/delete", data);
    console.log(res);
    res = res.data;
};
let data = { id: "", name: "", age: "" };

const Delete2 = () => {


    const title = "ユーザー削除";


    React.useEffect(() => {
        (async () => {
            const listData = await Delete();
            console.log(listData);
        })();
    }, []);

    return (
        <Menu name={title}>
            <h1>ユーザー削除</h1>

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
                        label="Required"
                        defaultValue={data.id}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue={data.name}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue={data.age}
                    />
                </div>
            </Box>
        </Menu>
    );
}




export default Delete2;