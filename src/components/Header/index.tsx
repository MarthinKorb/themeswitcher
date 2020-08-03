import React, { useContext } from 'react';
import { Container, Container2, ImageContainer } from './styles';

import { DoneOutline } from '@material-ui/icons';

import { shade } from 'polished';

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { title, colors } = useContext(ThemeContext);


    return (
        <>
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
                    onHandleColor={colors.third}
                    offHandleColor={colors.third}
                    onColor={shade(0.3, colors.primary)}
                    offColor={colors.primary}
                />
            </Container>

            <Container2>
            <ImageContainer>
                <DoneOutline fontSize="large"/>
            </ImageContainer>
            </Container2>
        </>
    );
}

export default Header;