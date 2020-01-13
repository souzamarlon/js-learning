import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 1225px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        /* display: block; */
        font-size: 24px;
        line-height: 37px;
        font-weight: bold;

        height: 38px;

        top: 144px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;

    button {
        height: 36px;
        width: 142px;
        background: #f94d6a;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1225px;
    margin: 20px auto;

    background: #ffff;
    padding: 0 30px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    thead th {
        color: #000;
        text-align: left;
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        padding: 12px;
        padding-top: 30px;
        padding-right: 140px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }

    button {
        background: none;
        border: 0;
        padding: 4px;

        a {
            color: #4d85ee;
        }
    }
    button.delete {
        border: 0;
        padding: 4px;
        align-items: center;
        background: none;
        border: 0;
        color: #de3b3b;
    }
`;

// export const List = styled.li`
//     margin: 20px auto;
//     padding: 0 20px;
//     align-content: center;
//     list-style: none;
//     width: 100%;
//     max-width: 1225px;

//     background: white;

//     ul {
//         margin: 20px auto;

//         span.name {
//             font-size: 16px;
//             line-height: 20px;

//             margin-right: 0 auto;
//         }
//         span.title {
//             margin-right: 200px;
//             font-size: 16px;
//             line-height: 20px;
//             margin-left: 200px;
//         }
//         span.start_date {
//             margin-left: 150px;
//             font-size: 16px;
//             line-height: 20px;
//         }
//         span.end_date {
//             margin-left: 150px;
//             font-size: 16px;
//             line-height: 20px;
//         }
//         span.active {
//             margin-left: 150px;
//             font-size: 16px;
//             line-height: 20px;
//         }
//         button.delete {
//             float: right;
//             padding: 0 15px;
//             align-items: center;
//             background: none;
//             border: 0;
//             color: #de3b3b;
//         }

//         button {
//             float: right;

//             padding: 0 15px;
//             align-items: center;
//             background: none;
//             border: 0;
//             /* color: #4d85ee; */
//         }
//         a {
//             color: #4d85ee;
//         }
//     }
//     .divider {
//         width: 100%;
//         height: 1px;
//         background: #eeeeee;
//     }
// `;
