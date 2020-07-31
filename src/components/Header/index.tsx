import React, { useContext } from 'react';
import { Container } from './styles';

import { shade } from 'polished';

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { title, colors } = useContext(ThemeContext);

    
    return (
        <Container>
            <h2>Switch Theme With Styled Components</h2>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={shade(0.3, colors.primary)}
                offColor={colors.primary}
            />
        </Container>
    );
}

export default Header;