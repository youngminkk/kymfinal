import { Avatar, Tooltip, IconButton, Box, Button, InputBase, useTheme} from '@mui/material';
import { styled } from '@mui/system';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
  
  const MessageInputWrapper = styled(InputBase)(({ theme }) => ({
    fontSize: 14,
    width: '100%',
  }));
  
  const Input = styled('input')({
    display: 'none',
  });
  
  function BottomBarContent() {
    const theme = useTheme();
  
    const user = {
      name: 'Catherine Pike',
    };
  
    return (
      <Box
        sx={{
          background: theme.colors.alpha.white[50],
          display: 'flex',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box flexGrow={1} display="flex" alignItems="center">
          <Avatar
            sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
            alt={user.name}
            src={user.avatar}
          />
          <MessageInputWrapper
            autoFocus
            placeholder="메시지를 입력하세요"
            fullWidth
          />
        </Box>
        <Box>
          <Tooltip arrow placement="top" title="이모지">
            <IconButton
              sx={{ fontSize: theme.typography.pxToRem(16) }}
              color="primary"
            >
              😀
            </IconButton>
          </Tooltip>
          <Input accept="image/*" id="messenger-upload-file" type="file" />
          <Tooltip arrow placement="top" title="첨부파일">
            <label htmlFor="messenger-upload-file">
              <IconButton sx={{ mx: 1 }} color="primary" component="span">
                <AttachFileTwoToneIcon fontSize="small" />
              </IconButton>
            </label>
          </Tooltip>
          <Button startIcon={<SendTwoToneIcon />} variant="contained">
            Send
          </Button>
        </Box>
      </Box>
    );
  }
  
  export default BottomBarContent;
  