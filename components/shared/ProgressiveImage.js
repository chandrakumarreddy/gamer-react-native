import React from 'react';
import styled from 'styled-components/native';

export default function ProgressiveImage(props) {
  return (
    <Container borderRadius={props.borderRadius}>
      <Image {...props} />
    </Container>
  );
}

const Container = styled.View`
  background-color: #e1e4e8;
  overflow: hidden;
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : 0)}px;
`;

const Image = styled.Image``;
