import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 700px;
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
        width: 223px;
        height: 38px;
        /* margin-right: 590px; */
        top: 144px;
        /* margin: 0px 200px 0px 0px; */
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 20px auto;

    background: #ffff;
    padding: 0 30px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    thead th {
        color: #000;
        text-align: left;
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        padding: 12px;
        padding-top: 30px;
        padding-right: 500px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }
    button {
        background: none;
        border: 0;
        padding: 4px;
        color: #4d85ee;
    }
`;

export const Answer = styled.div`
    div {
        border-radius: 4px;
        width: 100%;
        max-height: 1000px;
        max-width: 1000px;
        margin: auto;

        .modal {
            /* padding: 10px; */
            width: 450px;
            height: 425px;
            margin: auto;
            padding: 20px;
        }
        .header {
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
        }
        .content {
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            /* padding: 10px 5px; */
            color: #666666;
        }
        .resp {
            padding-top: 10px;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 10px;
        }

        .close {
            cursor: pointer;
            position: absolute;
            display: block;
            padding: 2px 5px;
            line-height: 20px;
            right: -10px;
            top: -10px;
            font-size: 24px;
            background: #ffffff;
            border-radius: 18px;
            border: 1px solid #cfcece;
        }

        .answer {
            background: none;
            border: 1px solid #dddddd;
            border-radius: 4px;
            height: 127px;
            width: 420px;
            /* padding-top: 15px; */

            color: #fff;
            font-size: 16px;
            line-height: 19px;
            color: #999999;
        }

        .submit {
            width: 420px;
            height: 45px;
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
            margin: auto;
            text-align: center;
        }
    }
`;
