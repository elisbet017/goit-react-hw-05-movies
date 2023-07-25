import styled from 'styled-components';

export const ReviewsSection = styled.section`
  padding: 10px 3px;
`;

export const Review = styled.li`
  border-bottom: dashed #d7d7d7;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.p`
font-weight: 500;
margin-bottom: 8px;
`