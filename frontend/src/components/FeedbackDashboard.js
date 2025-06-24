
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');

  const fetchData = async () => {
    const params = { ...(category && { category }), sort };
    const res = await axios.get('http://localhost:5000/api/feedback', { params });
    setFeedbacks(res.data);
  };

  useEffect(() => { fetchData(); }, [category, sort]);

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      <div>
        <select onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug report">Bug Report</option>
          <option value="feature request">Feature Request</option>
        </select>
        <select onChange={e => setSort(e.target.value)}>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>
      <ul>
        {feedbacks.map(f => (
          <li key={f._id}>
            <strong>{f.name}</strong> ({f.email}) - [{f.category}] <br />
            {f.feedback} <br />
            <em>{new Date(f.createdAt).toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
