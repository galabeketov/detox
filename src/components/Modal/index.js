import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false };
    case 'open':
      return { open: true, size: action.size };
    default:
      throw new Error('Unsupported action...');
  }
}

const MyModal = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <div>
      <Button
        className="lightbox-image video-btn"
        onClick={() => dispatch({ type: 'open', size: 'fullscreen' })}>
        <Icon name="play" className="ms-1" />
        Watch Video
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}>
        <Modal.Header>Watch the Video</Modal.Header>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tE-9qiT4_BY?start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </Modal>
    </div>
  );
};

export default MyModal;
