import React, { useState } from 'react';
import { Button, TextField, Container, Typography, TextareaAutosize, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const EpisodeRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [episodeDate, setEpisodeDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [loading, setLoading] = useState(false);

  // Venue and Speaker details
  const eventDetails = {
    "2024-11-13": {
      venue: "Department of Commerce & Management Studies (DCMS), AU Peter F. Drucker Hall, Andhra University",
      speaker: "Sri Dr. A. Narasimha Murthy, PhD, Assistant Commissioner of Police, Vizag West Sub-Division"
    },
  };

  const selectedEvent = eventDetails[episodeDate];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { name, email, phone, episodeDate, specialRequests };

    try {
      await storeEpisodeDataInSheet(data);
      alert('Registration successful!');
      setName('');
      setEmail('');
      setPhone('');
      setEpisodeDate('');
      setSpecialRequests('');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration');
    } finally {
      setLoading(false);
    }
  };

  const storeEpisodeDataInSheet = (data) => {
    return new Promise((resolve, reject) => {
      console.log('Storing episode data:', data);
      resolve('Data stored successfully');
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f7f7f7"
    >
      <Container maxWidth="sm" style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h3" gutterBottom align="center">
          Register for Upcoming Episode
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>Preferred Episode Date/Time</InputLabel>
          <Select
            value={episodeDate}
            onChange={(e) => setEpisodeDate(e.target.value)}
            required
          >
            <MenuItem value="2024-11-13">Wednesday, 13th Nov 2024</MenuItem>
          </Select>
        </FormControl>

        {selectedEvent && (
          <Box mt={2} p={2} bgcolor="#f4f4f4" borderRadius="8px">
            <Typography variant="body1" gutterBottom>
              <strong>Episode 10</strong><br />
              📅 <strong>Date:</strong> {episodeDate}<br />
              🕓 <strong>Time:</strong> 4 PM - 6 PM<br />
              📍 <strong>Venue:</strong> {selectedEvent.venue}<br />
              🎤 <strong>Guest Speaker:</strong> {selectedEvent.speaker}<br />
              <strong>Episode Topic:</strong> Beyond the Badge - Public Safety
            </Typography>
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            margin="normal"
          />

          <TextareaAutosize
            minRows={3}
            placeholder="Special requests or comments"
            style={{ width: '100%', marginTop: '16px' }}
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
            style={{ marginTop: '16px' }}
          >
            {loading ? 'Submitting...' : 'Register'}
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default EpisodeRegistrationForm;