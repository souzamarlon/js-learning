import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.3);
    padding: 0 30px;
`;
export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            padding-right: 20px;
            /* border-right: 1px solid #000000; */
        }
        a {
            font-weight: bold;
            color: #7159c1;
        }
    }
    aside {
        display: flex;
        align-items: center;
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;
    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #eee;
        }
        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }

    button {
        background: #d44059;
        color: #fff;
        border: 0;
        border-radius: 4px;
        width: 71px;
        height: 42px;
    }
`;
