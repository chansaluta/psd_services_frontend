import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Grid, Container, Typography, Stack } from '@mui/material';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

import { CarouselAnimation } from '../../sections/overview/extra/carousel';


// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  // maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/images/123.jpg"
          variants={varFade().in}
        />

      

        <Container>
          <ContentStyle>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <m.div variants={varFade().inRight} style={{ marginTop: '100px' }}>
                  <Typography variant="h2" sx={{ color: 'common.white' }}>
                   DSWD Caraga Protective Services Division <br/>
                    <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                      Programs and Services
                    </Typography>
                  </Typography>
                </m.div>

                <m.div variants={varFade().inRight} style={{ marginTop: '20px' }}>
                  <Typography sx={{ color: 'common.white' }}>
                    This is the Official Website of the DSWD Caraga Protective Services Division
                  </Typography>
                </m.div>

                <m.div variants={varFade().inRight} style={{ marginTop: '20px' }}>
                  <NextLink href={PATH_DASHBOARD.root} passHref>
                    <Button
                      size="large"
                      variant="contained"
                    >
                      Get Started
                    </Button>
                  </NextLink>
                </m.div>
              </Grid>
             
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
