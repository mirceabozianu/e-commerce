import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const CardList = ({items}) => {

    return (
        <StyledDiv>
            {
                items.map(item => {

                    return (
                        <Card
                            key={item.id}
                            name={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                        />
                    )
                })
            }
        </StyledDiv>
    );
}
export default CardList;