import styled from 'styled-components';

export const StyledList = styled.div`
  .profile-photo {
    background-image: url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    repeat: no-repeat;
    background-size: cover;
  }

  .list-name {
    list-style-type: none;
    display: flex;
    padding: 15px 0px;
    gap: 30px;
    justify-content: baseline;
    align-items: center;
    padding-left: 10px;
    position: relative;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }

  .list-name:hover,
  .list-name:focus {
    background-color: #9dc180;
    color: #fff;
    fill: #fff;
  }

  .remove-btn {
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 25px;
    right: 40px;
    cursor: pointer;
  }

  .main-title {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .contacts-list {
    padding: 0px;
  }
`;
