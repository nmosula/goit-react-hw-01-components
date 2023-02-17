import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 30%;
  margin: 0 auto 20px;
  border: 1px solid var(--grey);
  border-radius: 2px;
`;

export const UserDescription = styled.div`
  text-align: center;
`;

export const UserAvatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 20px auto;
  background-color: aquamarine;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  color: var(--grey);
  font-size: 22px;
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  color: var(--grey);
  font-size: 22px;
`;

export const StatList = styled.ul`
  display: flex;
  border-top: 1px solid var(--grey);
  background-color: var(--bg-grey);
  text-align: center;
`;

export const StatListItem = styled.li`
  width: 100%;
  padding: 20px 0;
  :not(:last-child) {
    border-right: 1px solid var(--grey);
  }
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: var(--grey);
`;

export const StatValue = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
`;