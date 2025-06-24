
import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', category: 'suggestion' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/feedback', formData);
    alert('Feedback submitted');
    setFormData({ name: '', email: '', feedback: '', category: 'suggestion' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
      <textarea name="feedback" placeholder="Your feedback" value={formData.feedback} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="suggestion">Suggestion</option>
        <option value="bug report">Bug Report</option>
        <option value="feature request">Feature Request</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
