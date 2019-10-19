import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 800px;
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
            margin: 0px 0px 0px 180px;
            width: 172px;
            background: #f94d6a;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            box-shadow: 0 0 12px;
            display: flex;
            justify-content: center;

            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
            strong {
                margin: 0 15px;
            }
        }

        h1 {
            font-size: 32px;
            font-weight: bold;
            margin: 0px 200px 0px 0px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const List = styled.li`
    padding: 20px;
    border-radius: 4px;
    /* background: #fff; */

    strong {
        display: block;
        color: #7159c1;
        font-size: 20px;
        font-weight: normal;
    }

    span {
        display: block;
        color: #666;
    }
`;
