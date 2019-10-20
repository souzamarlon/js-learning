import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 780px;
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
            margin: 0px 0px 0px 192px;
            width: 172px;
            background: #f94d6a;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            box-shadow: 0 0 12px;
            justify-content: center;

            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
            > strong {
                margin: 0 15px;
            }
        }

        > h1 {
            font-size: 32px;
            font-weight: bold;
            margin: 0px 200px 0px 0px;
        }
    }

    > ul {
        display: block;
        align-items: center;
        max-width: 780px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
        margin-top: 30px;

        /* margin: 50px auto; */
        margin: 50px 0px 0 0px;
    }
`;

export const List = styled.li`
    list-style: none;
    height: 50px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    > h1 {
        font-size: 21px;
        margin: 0px 630px 0 15px;
    }
    > span {
        font-size: 21px;
        margin: 0px 0px 0 0px;
        /* margin: 0px 15px 0 0%; */
    }
`;
