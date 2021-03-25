import styled from 'styled-components';

export const ProgressBar = ({ width, label }) => {
    return (
        <Container>
            <FlexContainer>
                <label>{label}</label>
                <label>{width}%</label>
            </FlexContainer>
            <Progress>
                <Bar width={width}></Bar>
            </Progress>
        </Container>
    );
};

const Progress = styled.div`
    background-color: #0f3d77;
    height: 5px;
    margin-top: 5px;
`;

const Bar = styled.div`
    width: ${({ width }) => width || 1}%;
    height: 5px;
    background-color: rgb(122, 159, 204);
    text-align: center;
    color: white;
`;

const Container = styled.div`
    width: 95%;
    margin: 0.35em auto 1em;
    font-size: 1.2rem;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
