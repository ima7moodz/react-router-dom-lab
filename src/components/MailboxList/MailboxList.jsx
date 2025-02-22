import { Link } from 'react-router-dom';


const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailbox List</h1>
        <ul>
          {mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id} className="mail-box">
              <Link to={`/mailboxes/${currentMailbox._id}`}>Mailbox {currentMailbox._id}</Link>
            </li>
          ))}
        </ul>
    </main>
  );
};

export default MailboxList;