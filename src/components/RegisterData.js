import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Menu from "../Menu";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
// import { useSate } from "React";
// import { SettingsInputComponent } from '@material-ui/icons';


const RegisterData = async (userData) => {
    let res = await axios.post("http://49.212.200.159:8080/api/user/add", JSON.stringify(userData), {
        headers: {
            'content-type': 'application/json',
        }
    });
    console.log(res);
    res = res.data;
    return res;
};

const RegisterData2 = () => {
    // const [data, setData] = React.useState();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

    // const [age, setage] = React.useState(0);

    const title = "ユーザ一覧";

    // React.useEffect(() => {
    //     (async () => {
    //         const listData = await RegisterData();
    //         console.log(listData);
    //     })();
    // }, []);

    const onChangeName = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    }

    const onChangeAge = (event) => {
        // console.log(event.target.value);
        setAge(event.target.value);
    }

    const sendData = async () => {
        console.log(name);
        console.log(age);
        const userData = {
            name: name,
            age: age
        };
        const res = await RegisterData(userData);
        console.log(res);
        return res.data;
    };

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

                    <Stack direction="row" spacing={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="名前"
                            onChange={(event) => onChangeName(event)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="年齢"
                            onChange={(event) => onChangeAge(event)}
                        />
                        <Button 
                            onClick={sendData}
                            variant="contained"
                             endIcon={<SendIcon />}>
                            登録
                        </Button>
                    </Stack>
                </div>

            </Box>
        </Menu>
    );
}




export default RegisterData2;








