import React from 'react';
import styled from 'styled-components/native';

export default function TextComponent(props) {
  return (
    <Text {...props} style={props.style}>
      {props.children}
    </Text>
  );
}

const Text = styled.Text`
  color: ${({color}) => color ?? '#fff'};
  font-family: 'Avenir Next';
  ${({xlarge, large, medium, small}) => {
    switch (true) {
      case xlarge:
        return 'font-size: 30px';
      case large:
        return 'font-size: 24px';
      case medium:
        return 'font-size: 18px';
      case small:
        return 'font-size: 14px';
      default:
        return 'font-size: 15px';
    }
  }}
  ${({light, bold, heavy}) => {
    switch (true) {
      case light:
        return 'font-weight: 200';
      case bold:
        return 'font-weight: 600';
      case heavy:
        return 'font-weight: 700';
      default:
        return 'font-weight: 400';
    }
  }}
  ${({center, right}) => {
    switch (true) {
      case center:
        return 'text-align: center';
      case right:
        return 'text-align: right';
      default:
        return 'text-align: left';
    }
  }}
`;
