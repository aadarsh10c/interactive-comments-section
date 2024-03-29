import  Container  from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export default function Comment(){
    return(
        <>
          <Container maxWidth={false} className='container' >
            <Stack spacing={1.5}>
              <p>This is comment 1</p>
              <p>This is comment 2</p>
            </Stack>
          </Container>
        </>
    )
}