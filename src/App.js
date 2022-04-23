
import './App.css';
import MainAppBar from './components/mainAppBar';
import Sub_AppBar from "./components/sub_AppBar";
import TextSections from "./components/TextSections";
import SimpleAccordion from "./components/Accordion"
import MapImag from './components/MapImage'
import OverviewGrid from './components/OverviewGrid'
import PermanentDrawerLeft from './components/drawerPractise'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import TemporaryDrawer from './components/TemporaryDrawer'
import Ahmed from './components/ahmed'
import ThorPageone from './ThorPageone';
import Dashboard_head from './components/dashboard_head'
import Box_card_container from './components/boxCardContain'
import Boxcard from './Boxcard'
import HeaderComponent from './ComponentOne/Header/header'
import { BrowserRouter } from 'react-router-dom';
import { useStyles } from './ComponentsAhmed.jsx/Header/HeaderStyles';
import { Box } from '@mui/system';
import Bgimage from './ComponentOne/BgImage/bgimage';
import PropertiesText from './ComponentOne/PropertiesPart/PropertiesText';
import PropertyImage from './ComponentOne/PropertiesPart/PropertyImage';
import { Grid } from '@mui/material';
import TextCard from './ComponentOne/MapText/TextCard';
import MapImage from './ComponentOne/MapText/MapImage';
import Card from './ComponentOne/RetalSection/card';
import CircleSection from './ComponentOne/RetalSection/CircleSection';
import CompanyDescription from './ComponentOne/CompanyDetails/CompanyDescription';
import CompanyPic from './ComponentOne/CompanyDetails/CompanyPic';
import TestMui from './TestBreakPoints/Test';
// import { palette } from '@mui/system';
const theme = createTheme();

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.palette.primary.main,
//   }
// }));
function App() {
  // const classes = useStyles();
  return (
  // <ThemeProvider theme={theme}>
  // <Router>
  // <PermanentDrawerLeft>
  // <Switch>
  // <Route exact path='/'>
  //   <HomePage/>
  // </Route>
  // <Route  path='/ContactPage'>
  //   <ContactPage/>
  // </Route>
  // </Switch>
  // </PermanentDrawerLeft>
  // </Router>
  // </ThemeProvider> 
  // <MainAppBar/>
  // <Sub_AppBar/>
  // <TextSections/><br/>
  // <SimpleAccordion/>
  // <MapImag/>
  // <OverviewGrid/>
  <>
    {/* <TemporaryDrawer/> */}
    {/* <Ahmed/> */}
    {/* <ThorPageone/>
    <Dashboard_head/> */}
    {/* <Boxcard/> */}
    {/* <Box_card_container/> */}
    <ThemeProvider theme={theme}>
    {/* <Router>
    <HeaderComponent/>
    </Router> */}
    {/* project 2 start */}
    {/* <HeaderComponent/> */}
    
    {/* <PropertiesText/> */}
    
    
    {/* <Bgimage/>
    <Grid container spacing={0}>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <PropertiesText/>
  </Grid>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <PropertyImage/>
    </Grid>
  
</Grid>

<Grid container spacing={0}>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <TextCard/>
  </Grid>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <MapImage/>
  </Grid>
</Grid>

<Card/>

<Grid container spacing={0}>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <CompanyPic/>
  </Grid>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <CompanyDescription/>
  </Grid>
  
</Grid> */}
{/* end of project 2 */}
{/* testing responsive */}
<TestMui/>
{/* end of testing */}

</ThemeProvider>
   
    
  </>
  )
}

export default App;
