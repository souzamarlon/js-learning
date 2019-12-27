import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 900px;
    padding-top: 30px;
    margin: 20px auto;
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
        width: 240px;
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
        width: 112px;
        background: #cccccc;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#CCCCCC')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }

    > button.submit {
        height: 36px;
        width: 112px;
        margin-left: 16px;
        background: #ee4d64;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#EE4D64')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 900px;

    margin: 0px auto;
    padding: 20px;
    background: #ffff;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    p {
        margin-top: 0;

        font-size: 14px;

        font-weight: bold;
    }

    input.name {
        width: 840px;
        display: flex;
        flex: 1;
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;

        &::placeholder {
            color: #999999;
        }
    }
`;

export const Table = styled.div`
    max-width: 840px;
    width: 30%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    /* grid-gap: 20px; */

    h1 {
        justify-content: space-between;
        font-size: 14px;
        padding: 0 15px;
        font-weight: bold;
    }

    input.start_date {
        width: 198px;
        align-items: center;
        background: #ffffff;
        border: 0.5px solid #eee;
        border-radius: 4px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 0 0px 0 15px;
    }

    input.end_date {
        width: 198px;
        align-content: center;
        background: #dddddd;
        border: 0.5px solid #dddddd;
        border-radius: 4px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 0 0 0 15px;
    }
    input.price {
        width: 198px;
        align-content: center;
        background: #dddddd;
        border: 0.5px solid #dddddd;
        border-radius: 4px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 0 15px 0 15px;
    }
`;
