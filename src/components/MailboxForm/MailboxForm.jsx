import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  boxOwner: '',
  boxSize: 'Small' ,
}

const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter a Boxholder:</label>
        <input type="text" 
        name="boxOwner" 
        value={formData.boxOwner} 
        onChange={handleChange} 
        required />

        <label>Select a Box Size:</label>
        <select 
        name="boxSize" 
        value={formData.boxSize} 
        onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;