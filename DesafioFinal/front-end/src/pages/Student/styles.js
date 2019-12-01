import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 1225px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        /* display: block; */
        font-size: 24px;
        line-height: 37px;
        font-weight: bold;
        width: 223px;
        height: 38px;
        /* margin-right: 590px; */
        top: 144px;
        /* margin: 0px 200px 0px 0px; */
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;

    button {
        height: 36px;
        width: 142px;
        background: #f94d6a;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }

    input {
        background: #ffffff;
        border: 0.5px solid;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 237px;
        height: 36px;
        padding: 0 15px;
        color: #999999;
        margin-left: 10px;

        &::placeholder {
            color: #999999;
        }
    }
`;

export const Content = styled.li`
    width: 100%;
    max-width: 1225px;
    height: 448px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    background: #ffff;
    padding: 0 30px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    ul {
    }
`;
