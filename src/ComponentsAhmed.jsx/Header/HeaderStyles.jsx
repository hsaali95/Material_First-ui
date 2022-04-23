import { capitalize } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme)=>({
    logo:{
        color:"red"
    },
    navList:{
        minWidth:"250px",
        maxWidth:"300px"
    },
    //wrapper of main container
    wrapper:{
        // padding:{padding:theme.spacing(2,2,0,32)}
        padding:"12px 16px 0px 260px",
        [theme.breakpoints.down('sm')]:{
            padding:theme.spacing(2,2)
        }
    },
    navlinks:{
        color:blue['A400'],
        "& :hover , &:hover div":{
            color:blue["A200"],
        },
        "& div":{
            color:blueGrey["A400"]
        }
    },
    activeNaveLinks:{
        color: blue["A700"],
        "& div":{
            color:blue["A700"]
        }
    },
    NavButton:{
        width:"100%",
        textTransform:"capitalize"
    },
    circleMarginleft:{
        [theme.breakpoints.down('sm')]:{
            marginLeft:'0px !important'
        }
    }
   
   
}))