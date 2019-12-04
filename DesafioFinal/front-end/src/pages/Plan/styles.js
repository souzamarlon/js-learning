import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 900px;
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
`;

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
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

        span.title {
            flex: 1;
        }
        span.duration {
            flex: 1;
        }
        span.price {
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

    background: white;

    ul {
        margin: 20px auto;

        span.title {
            font-size: 16px;
            line-height: 20px;

            margin-right: 0 auto;
        }
        span.duration {
            margin-right: 200px;
            font-size: 16px;
            line-height: 20px;
            margin-left: 200px;
        }
        span.price {
            margin-left: 150px;
            font-size: 16px;
            line-height: 20px;
        }
        button.delete {
            float: right;
            padding: 0 15px;
            align-items: center;
            background: none;
            border: 0;
            color: #de3b3b;
        }

        button {
            float: right;

            padding: 0 15px;
            align-items: center;
            background: none;
            border: 0;
            /* color: #4d85ee; */
        }
        a {
            color: #4d85ee;
        }
    }
    .divider {
        width: 100%;
        height: 1px;
        background: #eeeeee;
    }
`;
