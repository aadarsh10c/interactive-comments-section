import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ShareIcon from '@mui/icons-material/Share';

export default function CommentBox (){
    return(
        <>
            <Card>
                {MobileCard}
            </Card>
        </>
    )
}

const MobileCard = (
    <>
         <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            title="amyrobson"
            subheader="1 month ago"
        />
        <CardContent>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus sapien, ullamcorper in aliquet vel, pellentesque et metus. Ut posuere leo nisl, nec rutrum velit cursus sed. Sed convallis pellentesque efficitur. Fusce eu ipsum eu ex tincidunt euismod sed a dolor. Aliquam nec urna ullamcorper, iaculis neque nec, volutpat lacus.
            </p>
        </CardContent>
        <CardActions>
            <Button>click me</Button>
            <Button>click me not</Button>
        </CardActions>
    </>
)