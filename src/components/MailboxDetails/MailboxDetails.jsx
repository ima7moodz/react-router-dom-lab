import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) return <p>Mailbox Not Found!</p>;

  return (
    <main>
      <h1><strong>Mailbox </strong> {selectedBox._id}</h1>
      <h2>Details</h2>
      <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;