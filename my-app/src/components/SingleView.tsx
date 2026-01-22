import type {MediaItem} from '../types/DBTypes';

const SingleView = (props: {
  item: MediaItem | undefined;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    // TODO: Add JSX for displaying a mediafile here
    <dialog open>
      {item && (
        <>
          <h2>{item.title}</h2>
          {item.media_type.split('/')[0] === 'image' && (
            <img src={item.filename} alt={item.description || item.title} />
          )}
          {item.media_type.split('/')[0] === 'video' && (
            // TODO: Add controls to the video element
            <video src={item.filename} />
          )}
          <p>{item.description}</p>
          <p>
            Uploaded {new Date(item.created_at).toLocaleString('en-fi')} by user
            id {item.user_id}
          </p>

          <button
            onClick={() => {
              setSelectedItem(undefined);
            }}
          >
            Close
          </button>
        </>
      )}
    </dialog>
  );
};

export default SingleView;