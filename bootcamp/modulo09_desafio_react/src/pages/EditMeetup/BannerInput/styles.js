import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin-bottom: 20px;

    label {
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }

        input {
            display: none;
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
