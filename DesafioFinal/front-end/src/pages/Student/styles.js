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

export const Content = styled.div`
    width: 100%;
    max-width: 1225px;
    /* height: 448px; */
    margin: 20px auto;
    padding: 0 20px;
    align-content: center;
    /* display: flex; */
    /* justify-content: space-between; */
    background: #ffff;
    /* padding: 0 30px; */
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    > header {
        padding: 20px;
        display: flex;
        /* flex: 1; */

        span.name {
            flex: 1;
        }
        span.email {
            flex: 1;
        }
        span.idade {
            flex: 1;
        }
    }
`;

export const List = styled.li`
    margin: 20px auto;
    padding: 0 20px;
    align-content: center;
    list-style: none;
    width: 100%;
    max-width: 1225px;
    /* display: row; */
    background: white;
    /* grid-template-columns: repeat(1, 1fr); */
    /* grid-gap: 12px; */

    /* justify-content: space-between; */
    /* display: flex; */
    /* flex-direction: row; */
    /* text-align: center; */

    /* height: 50px; */
    /* margin-top: 20px; */
    /* align-items: center; */

    /* box-sizing: border-box #000; */
    /* line-height: 50px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    ul {
        margin: 20px auto;

        span.name {
            /* left: 10px; */
            /* float: left; */
            font-size: 16px;
            line-height: 20px;
            /* margin-right: 200px; */
            margin-right: 0 auto;

            /* margin: 0px 200px 0px 15px; */
        }
        span.email {
            margin-right: 200px;
            font-size: 16px;
            line-height: 20px;
            margin-left: 200px;

            /* margin: 0px 400px 0px 20px; */
        }
        span.idade {
            margin-left: 150px;
            font-size: 16px;
            line-height: 20px;
            /* margin-left: auto; */

            /* margin-right: 50px; */
            /* line-height: 19px; */
            /* opacity: 0.5; */
        }
        button.delete {
            float: right;
            /* margin-top: 5px; */
            padding: 0 15px;
            align-items: center;
            background: none;
            border: 0;
        }

        > button {
            float: right;
            /* margin-top: 5px; */
            /* margin-left: 15px auto; */
            padding: 0 15px;
            align-items: center;
            background: none;
            border: 0;
        }

        a.delete {
            color: #de3b3b;
        }
    }
    .divider {
        width: 100%;
        height: 1px;
        background: #eeeeee;
    }
`;
