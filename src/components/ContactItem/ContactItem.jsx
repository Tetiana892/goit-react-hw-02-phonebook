import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
