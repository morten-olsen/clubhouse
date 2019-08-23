import React, {FunctionComponent} from 'react';
import {
  Link,
  Body,
} from '../../../typography';
import styled from 'styled-components';

export interface Props {
  name: string;
  onDownloadInvite: () => {};
  sender: {
    name: string;
  }
}

const Wrapper = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const Inner = styled.div`
  background: #ecf0f1;
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-block;
`;

const MemberAdded: FunctionComponent<Props> = ({
  name,
  sender,
  onDownloadInvite,
}) => (
  <Wrapper>
    <Inner>
      <Body>
        {sender.name} added {name}, <Link>⬇️ Download invitation</Link>
      </Body>
    </Inner>
  </Wrapper>
);

export default MemberAdded;
