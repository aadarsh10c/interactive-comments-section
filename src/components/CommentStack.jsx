import  Container  from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CommentBox from './Comment'


export default function CommentStack(){
    return(
        <>
          <Container maxWidth={false} className='container' >
            <Stack spacing={1.5}>
             <Paper variant="outlined" square={false} elevation={2}>
                <CommentBox/>
             </Paper>
            </Stack>
          </Container>
        </>
    )
}