import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #00ff00;
`;

const RankName = styled.div`
  margin-top: 10px;
  color: #fff;
  font-size: 18px;
`;

const Avatar: React.FC = () => {
    return (
        <AvatarContainer>
            <AvatarImage src="path_to_avatar_image" alt="Avatar" />
            <RankName>Rank: Acolyte</RankName>
        </AvatarContainer>
    );
};

export default Avatar;