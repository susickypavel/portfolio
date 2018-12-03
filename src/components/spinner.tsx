import * as React from "react";
import styled from "styled-components";

const SpinnerHolder = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    & p {
        font: 36px roboto-black;
        text-align: center;
    }
`;

const DotHolder = styled.div`
      width: 100%;
      text-align: center;
`;

const Dot = styled.div<{ delay: number; }>`
    width: 40px;
    height: 40px;
    margin: 0 4px;
    border-radius: 100%;
    background-color: #c70039;
    transform: scale(0);
    display: inline-block;
    animation: dotanim 2s infinite ease-in-out ${(props) => props.delay}ms;
`;

export const Spinner = React.memo(() => {
    return (
        <SpinnerHolder>
            <p>We're loading content for you!</p>
            <DotHolder>
                <Dot delay={0}/>
                <Dot delay={300}/>
                <Dot delay={600}/>
            </DotHolder>
        </SpinnerHolder>
    );
});
