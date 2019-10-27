import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        span {
            color: #fbfbfb;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        > button {
            margin-left: 450px;
            width: 150px;
            height: 35px;
            background: #f94d6a;
            /* font-weight: bold; */
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 12px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
    button {
        margin-left: 450px;
        margin-top: 5px;
        width: 150px;
        height: 35px;
        background: #f94d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
    }
`;
