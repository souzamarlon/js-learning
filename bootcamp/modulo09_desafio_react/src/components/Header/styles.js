import styled from 'styled-components';

export const Container = styled.div`
    background: #000000;
    padding: 0 30px;
    height: 64px;
    display: flex;
    align-items: center;

    /* mix-blend-mode: normal; */
    opacity: 0.3;

    nav {
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }
        a {
            font-weight: bold;
            color: #7159c1;
        }
    }
`;
