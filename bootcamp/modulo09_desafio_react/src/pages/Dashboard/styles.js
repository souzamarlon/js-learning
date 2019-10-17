import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    color: #fff;

    button {
        margin: 5px 0 0;
        height: 30px;
        width: 120px;
        background: #f94d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 13px;

        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
    }
    h1 {
    }
`;
