import styled from '@emotion/styled';

const Clearfix = styled.div`
  &:before,
  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

export default Clearfix;
