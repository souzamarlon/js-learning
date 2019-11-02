import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;
    display: flex;

    flex-direction: column;

    color: #fff;

    header {
        display: flex;
        align-self: center;
        align-items: center;
        /* justify-content: space-between; */

        /* margin: 80px auto; */
        button {
            height: 42px;
            margin-left: 300px;

            /* margin: 2px 0px 0px 192px; */
            width: 172px;
            background: #f94d6a;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            box-shadow: 0 0 12px;
            justify-content: center;
            display: flex;

            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
            > strong {
                /* margin: 0 4px; */
                margin: 2px 0px 0px 5px;
            }
        }

        > h1 {
            font-size: 32px;
            line-height: 37px;
            font-weight: bold;
            width: 223px;
            height: 38px;
            margin-right: 250px;
            top: 144px;
            /* margin: 0px 200px 0px 0px; */
        }
    }
`;

export const Banner = styled.div`
    top: 142px;
    left: 250px;
    height: 300px;
    max-width: 940px;
    max-height: 300px;
    width: 940px;
    border: 0px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #ffffff;

    background: rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 20px;
        line-height: 23px;
        height: 24px;
    }

    img {
        /* max-width: 100%; */
        max-height: 300px;
        border: 0px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        display: flex;
        opacity: 1;
        filter: alpha(opacity=100);
        filter: contrast(100%);
    }
`;
