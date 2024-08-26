import React, { useState } from 'react';

export default function Home() {
  // Initialize state to store the data for 50 rows
  const [data, setData] = useState(
    Array(50).fill({ medication: '', ndc: '', size: '', initials: '' })
  );

  // State to store the password entered by the user
  const [password, setPassword] = useState('');

  // Function to handle input changes in the table rows
  const handleChange = (index, field, value) => {
    // Create a copy of the current data array
    const newData = [...data];
    // Update the specific field of the row at the given index
    newData[index][field] = value;
    // Update the state with the modified data array
    setData(newData);
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    const correctPassword = 'seainpt98108$'; // The correct password
    if (password === correctPassword) {
      // If password is correct, show success message
      alert('Data updated successfully!');
    } else {
      // If password is incorrect, show error message
      alert('Incorrect password. Try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Medication Datasheet</h1>
      {/* Table structure */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>MEDICATION (name, strength, form)</th>
            <th style={styles.th}>NDC/REF#</th>
            <th style={styles.th}>SIZE/COMMENTS</th>
            <th style={styles.th}>INITIALS</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the data array to create table rows */}
          {data.map((row, index) => (
            <tr key={index}>
              <td style={styles.td}>
                {/* Input field for the Medication column */}
                <input
                  type="text"
                  value={row.medication}
                  onChange={(e) => handleChange(index, 'medication', e.target.value)}
                  style={styles.input}
                />
              </td>
              <td style={styles.td}>
                {/* Input field for the NDC/REF# column */}
                <input
                  type="text"
                  value={row.ndc}
                  onChange={(e) => handleChange(index, 'ndc', e.target.value)}
                  style={styles.input}
                />
              </td>
              <td style={styles.td}>
                {/* Input field for the SIZE/COMMENTS column */}
                <input
                  type="text"
                  value={row.size}
                  onChange={(e) => handleChange(index, 'size', e.target.value)}
                  style={styles.input}
                />
              </td>
              <td style={styles.td}>
                {/* Input field for the INITIALS column */}
                <input
                  type="text"
                  value={row.initials}
                  onChange={(e) => handleChange(index, 'initials', e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Input field for the password */}
        <input
          type="password"
          placeholder="Enter password to submit"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {/* Submit button to trigger the password check */}
        <button onClick={handleSubmit} style={styles.button}>SUBMIT</button>
      </div>
    </div>
  );
}

// Inline styles object
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};
