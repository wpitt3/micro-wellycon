import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Container,
    Grid,
    Alert,
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    CalendarToday,
    AccessTime,
    Info,
    Casino,
    People,
    EmojiEvents
} from '@mui/icons-material';


const EventPage = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };

    // Rest of the existing imports and styles...

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>

            {/* Hero Banner */}
            <Box
                sx={{
                    height: 400,
                    background: 'linear-gradient(45deg, #6a1b9a 30%, #4a148c 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    mb: 4
                }}
            >
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 'bold',
                            mb: 2,
                            animation: 'bounce 2s infinite'
                        }}
                    >
                        🎲 Micro Will-ycon 🎲
                    </Typography>
                    <Typography variant="h4" sx={{ animation: 'pulse 2s infinite' }}>
                        Where Fun Meets Friends!
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <img src={process.env.PUBLIC_URL + "/games.webp"} alt="people enjoying board games" width={300}/>
            </Box>
            <Container maxWidth="lg">


                {/* Event Details */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <CalendarToday sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="h6">When</Typography>
                                </Box>
                                <Typography>Saturday from 12:00 at Helen, Manu and Will's place</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="h6">Duration</Typography>
                                </Box>
                                <Typography>Until people want to go home</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                {/* What to Expect */}
                <Card sx={{ mb: 6, p: 4 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'primary.main' }}>
                        ✨ What's in Store ✨
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'translateX(8px)' }
                            }}>
                                <Casino sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                                <Typography>Awesome board games for everyone!</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'translateX(8px)' }
                            }}>
                                <People sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                                <Typography>Fun, light conversation, with friends</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'translateX(8px)' }
                            }}>
                                <EmojiEvents sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                                <Typography>A sense of accomplishment and purpose</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>

                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <img src={process.env.PUBLIC_URL + "/games3.jpeg"} alt="people enjoying board games" width="300"/>
                </Box>
                {/* CTA Button */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleClick}
                        sx={{
                            fontSize: '1.25rem',
                            py: 2,
                            px: 6,
                            borderRadius: 50,
                            background: 'linear-gradient(45deg, #6a1b9a 30%, #4a148c 90%)',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            }
                        }}
                    >
                        Count Me In! 🎉
                    </Button>
                    {showAlert && (
                        <Alert
                            severity="info"
                            sx={{ mb: 4 }}
                        >
                            This button does nothing! 
                        </Alert>
                    )}
                </Box>
            </Container>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <img src={process.env.PUBLIC_URL + "/games2.jpeg"} alt="people enjoying board games" width="300"/>
            </Box>
            {/* Footer */}
            <Box
                sx={{
                    bgcolor: 'primary.dark',
                    color: 'white',
                    py: 4,
                    mt: 6
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center">
                        See you at the gaming table! 🎲✨
                    </Typography>
                </Container>
            </Box>

            <style jsx>{`
       
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
        </Box>
    );
};

export default EventPage;