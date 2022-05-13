import React, {ReactNode} from 'react';
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

interface LayoutProps {
    children?: ReactNode
}


const DefaultLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <LayoutContainer className={'d-flex flex-column'}>
            <NavigationBar/>

            {children}
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export default DefaultLayout;

