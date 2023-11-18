import { StyledList } from './Styled';
import { ReactComponent as TrashSvg } from 'icons/trashSvg.svg';

export const ContactsList = ({ id, name, number, handleDeleteContact }) => {
  return (
    <StyledList>
      <li className="list-name">
        <div className="profile-photo"></div>
        <p>
          {name}: {number}
        </p>
        <button
          className="remove-btn"
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          <TrashSvg />
        </button>
      </li>
    </StyledList>
  );
};
