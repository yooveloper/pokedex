import React from 'react';
import styled from '@emotion/styled/macro';

const Base = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  margin-top: 24px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  background-color: #E5E7EB;
  color: #6B7280;
  border-radius: 12px;
  padding: 8px 12px;
`;

const SearchForm: React.FC = () => {
  return (
    <Base>
      <SearchInput placeholder="Search for a Pokémon" />
    </Base>
  )
}

export default SearchForm;
