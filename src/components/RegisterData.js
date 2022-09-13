import React from 'react';
import Menu from '..Menu';
import as React from 'react';
import Box from '@muimaterialBox';
import TextField from '@muimaterialTextField';
import axios from axios;


const RegisterData = () = {
    const title = 'ユーザー登録';
    return(
        Menu name = { title }
             h1ユーザー登録h1
         Menu


    );
};

const userListData = async() = {
    let res = await axios.get(http49.212.200.1598080apiuserlist);
    console.log(res);
    res = res.data;
    return res;
};

const data = { name, age };
let RegisterData = async() = {
    let res = await axios.post(http49.212.200.1598080apiuseradd, data);
    console.log(res);
    res = res.data;
    return res;

    return(
        Box
            component = form
            sx = {{
            '& .MuiTextField-root' { m 1, width '25ch' },
        }}
noValidate
autoComplete = off

div
TextField
required
id = outlined - required
label = 名前
                    data name =

    div
div
TextField
required
id = outlined - required
label = 年齢
                    data age =

    div

Box
    );
};

export default RegisterData;