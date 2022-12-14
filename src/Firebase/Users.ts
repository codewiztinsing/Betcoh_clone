import {getDatabase, ref, set} from 'firebase/database';
import { database } from '../../config/firebase';


export const AddUser = (userId, name, email, imageUrl = null) => {
const db = database
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
};
