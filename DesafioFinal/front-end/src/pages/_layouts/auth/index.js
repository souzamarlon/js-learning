import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Box } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Box>
                <Content>{children}</Content>
            </Box>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
