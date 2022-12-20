// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Zoom, Typography, Container, Grid, Tooltip, Stack } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

//

// ----------------------------------------------------------------------\


const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


  

  

// ----------------------------------------------------------------------

Maintenance.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Maintenance() {

  return (
    <Page title="Portal Login" sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            PSD Program and Services Login Portal
          </Typography>
       
        <Grid spacing={3} mb={3}>
        <Grid item xs={12} md={12} mt={2}>
            <Stack spacing={2}>
      
              <Tooltip title={'ARRS'} TransitionComponent={Zoom} >
              <Button href='/' variant="contained" color='warning' className={`basic-button`}>CAPCIMS</Button>
              </Tooltip>

              <Tooltip title={'MTA'} TransitionComponent={Zoom} >
              <Button href='/mta/' className={`basic-button`} color='primary' variant='contained'>Minors Travelling Abroad</Button>
              </Tooltip>

              <Tooltip title={'RRPTP'} TransitionComponent={Zoom} >
              <Button href='/rrptp/' className={`basic-button`} color='info' variant='contained'>Recovery And Reintegration Program for Trafficked Persons</Button>
              </Tooltip>

              <Tooltip title={'SFP'} TransitionComponent={Zoom} >
              <Button href='/sfp/' className={`basic-button`} color='grey' variant='contained'>Supplemental Feeding Program</Button>
              </Tooltip>

            
      
            </Stack>
            </Grid>
        </Grid>

          <NextLink href="/" passHref>
            <Button size="large" variant="contained">
              Go to Home
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </Page>
  );
}
