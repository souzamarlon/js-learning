import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    width: 940px;
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

        .description {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            height: 200px;
            padding: 15px;
            color: #fff;
            margin: 0 0 10px;
            font-size: 14px;

            &::placeholder {
                font-size: 14px;

                color: rgba(255, 255, 255, 0.7);
            }
        }

        > button {
            margin-left: 760px;
            width: 180px;
            height: 42px;
            background: #f94d6a;
            /* font-weight: bold; */
            color: #fff;
            border: 0;
            border-radius: 4px;
            justify-content: center;
            align-items: center;
            display: flex;
            font-size: 12px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
            > strong {
                margin: 2px 0px 0px 5px;
            }
        }
    }
`;
