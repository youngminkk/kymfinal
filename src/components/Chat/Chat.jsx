import { useState } from 'react';
import TopBarContent from './TopBarContent';
import BottomBarContent from './BottomBarContent';
import ChatContent from './ChatContent';
import { styled } from '@mui/system';
import {Box,  Divider, useTheme} from '@mui/material';
import Scrollbar from '../Scrollbar/Scrollbar';

const RootWrapper = styled(Box)(
  ({ theme }) => `
       height: 55vh;
       display: flex;
`
);

const ChatWindow = styled(Box)(
  () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        position:relative;
`
);

const ChatTopBar = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(2)};
        align-items: center;
`
);

function Chat() {
  const theme = useTheme();

  return (
    <div id='chat'>
     <RootWrapper className="Mui-FixedWrapper">
        <ChatWindow>
          <ChatTopBar
            sx={{
              display: { ls: 'flex', xs: 'inline-block' }
            }}
          >
            <TopBarContent />
          </ChatTopBar>
          <Box flex={1}>
            <Scrollbar>
              <ChatContent />
            </Scrollbar>
          </Box>
          <Divider />
          <BottomBarContent />
        </ChatWindow>
      </RootWrapper>
      </div>
  );
}

export default Chat;
