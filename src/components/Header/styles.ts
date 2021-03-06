import styled from "styled-components";

export const Container = styled.header`
    background: var(--dark-green);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background:  var(--green-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: transform 0.5s;
        
        &:hover {
            transform: scale(1.05);
        }
    }

    div {

        &.app-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        }

        h1 {
            margin-left: 1rem;
            color: var(--shape);
        }
    }
    
`; 