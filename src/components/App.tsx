import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentHeader>
                <div className="cssans__word">
                    <b className="cssans:C"></b>
                </div>
            </ContentHeader>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    background-color: rgb(97, 109, 179);
    min-height: 100vh;
`;

const ContentHeader = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    height: 69px;
    max-width: 1140px;
    margin: 0 auto;
`;

export default App;