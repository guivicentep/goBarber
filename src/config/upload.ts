import path from 'path';
import multer from 'multer';

export default {
    storage: multer.diskStorage({
        destination: '';
    }),
};
