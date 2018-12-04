import React from 'react';
import { Message } from '../StyledComponents/Message';
import PropTypes from 'prop-types';

export class FlashMessage extends React.Component {
  toastCloseButtonClick=() => {
    this.props.handleFlashMessage(false);
  }

  render() {
    const { renderMode, title, subtitle, caption, kind, show, timeout } = this.props;
    const displayValue = show ? '' : 'none';
    const style = {};
    style.display = displayValue;

    if (renderMode !== 'inline') {
      style.position = 'relative';
      style.width = '225px';
      style.margin = '0 auto';
    }

    const inline = () => {
      return (
        <div style={style}>
          <Message
            renderMode={renderMode}
            title={title}
            subtitle={subtitle}
            caption={caption}
            kind={kind}
            timeout={timeout}
            handleToastCloseButtonClick={this.toastCloseButtonClick}
            />
        </div>
      );
    };

    const toast = () => {
      return (<div style={{ position: 'absolute', width: '100%' }}>
        {inline()}
      </div>);
    };

    return (renderMode === 'inline') ? inline() : toast();
  }
}


FlashMessage.propTypes = {
  renderMode: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  kind: PropTypes.string,
  show: PropTypes.bool,
  timeout: PropTypes.number,
  handleFlashMessage:  PropTypes.func,
};

export default FlashMessage;
