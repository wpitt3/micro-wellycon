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

// Styled components for fireworks
const FireworkContainer = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
});

const FireworkDot = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#ffeb3b',
    boxShadow: '0 0 10px 2px rgba(255, 235, 59, 0.8)',
    animation: 'explode 1s ease-out forwards',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'inherit',
        filter: 'blur(2px)',
    },
    '@keyframes explode': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(0)',
            opacity: 0,
        }
    }
}));

const FireworkParticle = styled('div')(({ $dx, $dy }) => ({
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: '#FFA000',
    borderRadius: '50%',
    animation: 'shoot 0.8s ease-out forwards',
    '@keyframes shoot': {
        '0%': {
            transform: 'translate(0, 0)',
            opacity: 1,
        },
        '100%': {
            transform: `translate(${$dx}px, ${$dy}px)`,
            opacity: 0,
        }
    }
}));

const createFirework = (x, y) => {
    const particles = [];
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = Math.random() * 100 + 50;
        particles.push({
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance,
            x: x,
            y: y,
        });
    }
    return particles;
};

const EventPage = () => {
    const [fireworks, setFireworks] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
        // Create multiple fireworks at random positions
        const newFireworks = Array.from({ length: 5 }, () => ({
            id: Math.random(),
            particles: createFirework(
                Math.random() * window.innerWidth,
                Math.random() * (window.innerHeight / 2)
            )
        }));
        setFireworks(newFireworks);
        setTimeout(() => setFireworks([]), 1000);
    };

    // Rest of the existing imports and styles...

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            {/* Fireworks */}
            <FireworkContainer>
                {fireworks.map((firework) => (
                    <React.Fragment key={firework.id}>
                        {firework.particles.map((particle, i) => (
                            <FireworkParticle
                                key={i}
                                $dx={particle.dx}
                                $dy={particle.dy}
                                style={{
                                    left: particle.x,
                                    top: particle.y,
                                }}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </FireworkContainer>
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

                {/* Event Description */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
                        🎮 Join the Fun! 🎮
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Welcome to the coziest gaming event of the season! Bring your competitive spirit,
                        your friendly attitude, and get ready for an afternoon of dice rolling,
                        card dealing, and memory making!
                    </Typography>
                </Box>

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
        @keyframes firework {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
        }
        @keyframes spark {
          0% { transform: scale(1); }
          100% { transform: scale(0); }
        }
        .animate-firework {
          --dx: ${() => (Math.random() - 0.5) * 200}px;
          --dy: ${() => (Math.random() - 0.5) * 200}px;
          animation: firework 1s ease-out forwards;
        }
        .animate-spark {
          animation: spark 1s ease-out forwards;
        }
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