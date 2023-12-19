import { useState } from 'react';
import { styled } from '@mui/system';
import {  Box,  Typography,  Tabs,  Tab, Avatar,  List,  
ListItemButton,  ListItemText } from '@mui/material';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
          background-color: ${theme.colors.success.lighter};
          color: ${theme.colors.success.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
          margin-left: auto;
          margin-right: auto;
    `
);

const RootWrapper = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `
);

const ListItemWrapper = styled(ListItemButton)(
  ({ theme }) => `
        &.MuiButtonBase-root {
            margin: ${theme.spacing(1)} 0;
        }
  `
);

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(16)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `
);

function SidebarContent() {
  const user = {
    name: 'Catherine Pike',
  };


  const tabs = [
    { value: '내 채팅방', label: '내 채팅방' },
  ];



  return (
    <RootWrapper>
      <Box display="flex" alignItems="center">
        <Avatar alt={user.name} src={user.avatar}  />
        <Box
          sx={{
            ml: 1.5,
            flex: 1
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" noWrap>
                {user.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          mb: 1,
          mt: 2
        }}
        variant="h3"
      >
        채팅
      </Typography>

      <TabsContainerWrapper>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {/* {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))} */}
        </Tabs>
      </TabsContainerWrapper>

      <Box mt={2}>
          <List disablePadding component="div">
            <ListItemWrapper>
              <ListItemText
                sx={{
                  mr: 1
                }}
                primaryTypographyProps={{
                  color: 'textPrimary',
                  variant: 'h5',
                  noWrap: true
                }}
                secondaryTypographyProps={{
                  color: 'textSecondary',
                  noWrap: true
                }}
                primary="Adison Press"
                secondary="I recently did some buying on Amazon and now I'm stuck"
              />
              <label>
                <b>8</b>
              </label>
            </ListItemWrapper>
          </List>
      </Box> 
    </RootWrapper>
  );
}

export default SidebarContent;
