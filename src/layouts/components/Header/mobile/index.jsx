import styled from 'styled-components';
import HeaderRight from './right';
import { MobileAndTablet } from '../../../../styling/breakpoints';
import { ElementColor } from '../../../../constants/colors';
import HeaderLeft from './left';


const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .6rem;
  background-color: ${(props) => props.colortheme === 'dark' ? ElementColor.primary : ElementColor.white};
  position: fixed;
  top: 0px;
  width: 100%;
  height: 85px;
  box-shadow: ${(props) => props.colortheme === 'dark' ? `0px 1px 25px ${ElementColor.primaryLight }` : `0px -5px 10px ${ElementColor.lightShadow}`};
`;

  
function MobileHeader(props) {
    const { theme } = props;

    return (
        <MobileAndTablet>
            <HeaderStyle colortheme={theme}>
                <HeaderLeft theme={theme} />
                <HeaderRight
                    theme={theme}
                />
            </HeaderStyle>
        </MobileAndTablet>
    )
}

export default MobileHeader
  