import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

export const Scrollbar = styled(Scrollbars)`
  min-height: ${props => (props.isfilterenabled === 'true' ? 'calc(100vh - (220px))' : 'calc(100vh - (175px))')};
  min-height: ${props => (props.isfilterenabled === 'true' ? '-moz-calc(100vh - (220px))' : '-moz-calc(100vh - (175px))')};
  min-height: ${props => (props.isfilterenabled === 'true' ? '-webkit-calc(100vh - (220px))' : '-webkit-calc(100vh - (175px))')};

  @media (max-width: 1239px) and (min-width: 600px) {
    min-height: ${props => (props.isfilterenabled === 'true' ? 'calc(100vh - (310px))' : 'calc(100vh - (265px))')};
    min-height: ${props => (props.isfilterenabled === 'true' ? '-moz-calc(100vh - (310px))' : '-moz-calc(100vh - (265px))')};
    min-height: ${props => (props.isfilterenabled === 'true' ? '-webkit-calc(100vh - (310px))' : '-webkit-calc(100vh - (265px))')};
  }

  @media (max-width: 599px) {
    min-height: ${props => (props.isfilterenabled === 'true' ? 'calc(100vh - (435px))' : 'calc(100vh - (390px))')};
    min-height: ${props => (props.isfilterenabled === 'true' ? '-moz-calc(100vh - (435px))' : '-moz-calc(100vh - (390px))')};
    min-height: ${props => (props.isfilterenabled === 'true' ? '-webkit-calc(100vh - (435px))' : '-webkit-calc(100vh - (390px))')};
  }
`;

export const ScrollbarAdjuster = styled(Scrollbars)`
  min-height: calc(100vh - (120px));
  min-height: -moz-calc(100vh - (120px));
  min-height: -webkit-calc(100vh - (120px));
`;

export const ScrollbarDashBoard = styled(Scrollbars)`
  min-height: calc(100vh - (336px));
  min-height: -moz-calc(100vh - (336px));
  min-height: -webkit-calc(100vh - (336pxs));
`;

export const ScrollbarPropertyDetails = styled(Scrollbars)`
  height: ${props => (props.iscatbannervisible === 'true' ? 'calc(100vh - (114px)) !important;' : 'calc(100vh - (60px)) !important;')} ;
  height: ${props => (props.iscatbannervisible === 'true'
    ? '-moz-calc(100vh - (114px)) !important;'
    : '-moz-calc(100vh - (60px)) !important;')} ;
  height: ${props => (props.iscatbannervisible === 'true'
    ? '-webkit-calc(100vh - (114px)) !important;'
    : '-webkit-calc(100vh - (60px)) !important;')} ;


  @media only screen and (min-width: 768px) and (max-width: 1240px) {
    height: ${props => (props.iscatbannervisible === 'true' ? 'calc(100vh - (201px)) !important;' : 'calc(100vh - (60px)) !important;')} 
    height: ${props => (props.iscatbannervisible === 'true'
    ? '-moz-calc(100vh - (201px)) !important;'
    : '-moz-calc(100vh - (60px)) !important;')} 
    height: ${props => (props.iscatbannervisible === 'true'
    ? '-webkit-calc(100vh - (201px)) !important;'
    : '-webkit-calc(100vh - (60px)) !important;')} 
  }
`;
