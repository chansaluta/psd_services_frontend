import { capitalCase } from 'change-case';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// guards
import GuestGuard from '../../guards/GuestGuard';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 640,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 2, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function SFPIndex() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <GuestGuard >
      <Page title="SFP">
        <RootStyle >
          <HeaderStyle >
            <Logo />
            {smUp && (
              <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                Don???t have an account? {''}
                <NextLink href={PATH_AUTH.register} passHref>
                  <Link variant="subtitle2">Get started</Link>
                </NextLink>
              </Typography>
            )}
          </HeaderStyle>

        

          <Container maxWidth="sm" >
            <ContentStyle >
              <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    Sign in to PSD Services - SFP
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
                </Box>

                <Tooltip title={capitalCase(method)} placement="right">
                  <>
                    <Image
                      disabledEffect
                      alt={method}
                      src={`https://minimal-assets-api.vercel.app/assets/icons/auth/ic_${method}.png`}
                      sx={{ width: 32, height: 32 }}
                    />
                  </>
                </Tooltip>
              </Stack>

             

              <LoginForm />

              {!smUp && (
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                  Don???t have an account?{' '}
                  <NextLink href={PATH_AUTH.register} passHref>
                    <Link variant="subtitle2">Get started</Link>
                  </NextLink>
                </Typography>
              )}
            </ContentStyle>
          </Container>

          {mdUp && (
            <SectionStyle sx={{ textAlign: 'center' }} style={{backgroundColor: '#aac8f9'}}>
              <Typography variant="h3"  sx={{ px: 5, mt: 10, mb: 5 }} style={{color: '#584f9e'}}>
              Supplemental Feeding Program <br/>
              Information System for Services
              </Typography>
              <Image
                visibleByDefault
                disabledEffect
                src="/images/login_sfp.png"
                alt="login"
                style={{backgroundColor: 'transparent'}}
              />
            </SectionStyle>
          )}
          
        </RootStyle>
      </Page>
    </GuestGuard>
  );
}
