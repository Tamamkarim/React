import type { MediaItem } from '../types/DBTypes';
import { motion } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

// مكون يعرض تفاصيل عنصر وسائط (صورة أو فيديو) في نافذة حوارية
const SingleView = (props: {
  item: MediaItem | undefined;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  const { item, setSelectedItem } = props;
  return (
    <Dialog open={!!item} onClose={() => setSelectedItem(undefined)} maxWidth="sm" fullWidth>
      {item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <DialogTitle>{item.title}</DialogTitle>
          <DialogContent>
            {/* إذا كان نوع الوسائط صورة، اعرض صورة */}
            {item.media_type.split('/')[0] === 'image' && (
              <img src={item.filename} alt={item.description || item.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
            )}
            {/* إذا كان نوع الوسائط فيديو، اعرض فيديو */}
            {item.media_type.split('/')[0] === 'video' && (
              <video src={item.filename} style={{ maxWidth: '100%', borderRadius: 8 }} /* يمكنك إضافة controls لاحقًا */ />
            )}
            <p>{item.description}</p>
            {/* عرض تاريخ التحميل ومعرّف المستخدم */}
            <p style={{ fontSize: 13, color: '#888' }}>
              Uploaded {new Date(item.created_at).toLocaleString('en-fi')} by user id {item.user_id}
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSelectedItem(undefined)} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </motion.div>
      )}
    </Dialog>
  );
};

export default SingleView;
