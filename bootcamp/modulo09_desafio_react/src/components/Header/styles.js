import styled from 'styled-components';

export const Container = styled.div`
    background: #000000;
    /* margin: 0 0 0 500px; */
    left: 0px;
    /* width: 1440px; */
    padding: 0 30px;
    height: 64px;
    display: flex;
    align-items: center;
    align-self: center;

    mix-blend-mode: normal;
    opacity: 0.3;

    nav {
        display: flex;
        align-items: center;

        img {
            padding-right: 20px;
            border: 0;
            width: 60px;
            height: 62px;
            color: #f94d6a;
            /* border-right: 1px solid #eee; */
        }
        /* a {
            font-weight: bold;
            color: #7159c1;
        } */
    }
`;
