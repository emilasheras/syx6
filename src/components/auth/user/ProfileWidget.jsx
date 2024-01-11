import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import syxutils from '../../../utils/syxutils';
import Guest from './Guest';
import SyxParagraph from '../../paragraph/SyxParagraph';

const ProfileWidget = () => {
    const currentUser = useContext(UserContext);

    return (
        <div className='s6-profile-container'>
            {(syxutils.empty(currentUser.currentUser))?<Guest />:<AuthenticatedUser currentUser={currentUser} />}
        </div>
    );
};

const AuthenticatedUser = ({currentUser}) => {
    // currentUser.isGuest
    // currentUser.currentUser // <- this is the firebase user object
    const userModel = currentUser.currentUser;
    console.log(userModel);
    const dateData = syxutils.getDetailsFromUnixTimestamp(userModel.metadata.lastLoginAt);
    console.log(dateData);
    return (
        <>
        <SyxParagraph text={userModel.email} />
        <SyxParagraph text={userModel.metadata.lastLoginAt} />
        
        </>
    )
}

AuthenticatedUser.propTypes = {
    currentUser: PropTypes.object.isRequired
}

export default ProfileWidget;
