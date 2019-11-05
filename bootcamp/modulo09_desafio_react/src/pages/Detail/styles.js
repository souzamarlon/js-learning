import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;
    display: flex;

    flex-direction: column;

    color: #fff;

    header {
        max-width: 940px;
        display: flex;
        align-self: center;
        align-items: center;

        /* margin: 80px auto; */
        a {
            border: 0;
            justify-content: center;
            display: flex;
            color: #fff;
            width: 150px;
            height: 42px;
            align-items: center;
        }
        > button {
            height: 42px;
            margin-right: 10px;

            /* margin: 2px 0px 0px 192px; */
            width: 150px;
            background: #4dbaf9;

            color: #fff;
            border: 0;
            border-radius: 4px;

            justify-content: center;
            display: flex;
            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#4DBAF9')};
            }
            > strong {
                font-weight: bold;
                font-size: 16px;
                /* margin: 0 4px; */
                margin: 2px 0px 0px 5px;
            }
        }

        button.Cancelar {
            height: 42px;
            /* margin-left: 10px; */

            /* margin: 2px 0px 0px 192px; */
            width: 150px;
            background: #f94d6a;

            color: #fff;
            border: 0;
            border-radius: 4px;
            justify-content: center;
            display: flex;

            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#f94d6a')};
            }
            > strong {
                font-weight: bold;
                font-size: 16px;
                /* margin: 0 4px; */
                margin: 2px 0px 0px 5px;
            }
        }

        > h1 {
            /* left: 250px; */

            font-size: 32px;
            line-height: 37px;
            font-weight: bold;
            width: 940px;
            height: 38px;
            margin: 0 0 0 0;

            /* flex: 1; */

            /* margin: 0px 200px 0px 0px; */
        }
    }

    p {
        margin-top: 15px;
        margin-bottom: 30px;
        max-width: 940px;
        height: 128px;
        font-size: 15px;
        line-height: 32px;
        color: #ffffff;
    }

    h2 {
        display: flex;
        align-items: center;
        margin: 30px 30px 0 0px;
        opacity: 0.6;
        color: #ffffff;
        height: 19px;
        font-size: 16px;
        line-height: 19px;

        .EventIcon {
            margin-right: 10px;
        }

        span {
            margin-left: 30px;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            .PlaceIcon {
                margin-right: 10px;
            }
        }
    }
`;

export const Banner = styled.div`
    margin-top: 42px;
    max-width: 940px;
    max-height: 300px;
    width: 940px;
    height: 300px;
    border: 0px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    border-radius: 4px;

    /* background: rgba(0, 0, 0, 0.1); */
    background: #d8d8d8;

    h1 {
        font-size: 20px;
        line-height: 23px;
        height: 24px;
    }

    img {
        /* max-width: 100%; */
        max-height: 300px;
        width: 940px;
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
