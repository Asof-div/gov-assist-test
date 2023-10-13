import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
import { useDisclosure } from '@chakra-ui/react';


function CustomMD({ user, color }) {
    const { push } = useHistory()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [switchType, setSwitchType] = useState('')

    
    const logOut = (type) => {
        
    }


    const ownerLinks = [
        {link: "Referrals", onUse: logOut},
    ]

    return (
        <React.Fragment>
            <MenuDropdown
                color={color}
                header={`Hello ${user?.first_name}`}
                divider={1}
                data={ ownerLinks }
            />
        </React.Fragment>
    )
}

export default CustomMD