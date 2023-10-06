import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
      apiKey: "AIzaSyBFgj1sShT1rkZkI51pVxTyRlATm_SNVRs",
      authDomain: "dragon-news-authenticati-35ca1.firebaseapp.com",
      projectId: "dragon-news-authenticati-35ca1",
      storageBucket: "dragon-news-authenticati-35ca1.appspot.com",
      messagingSenderId: "430275907016",
      appId: "1:430275907016:web:780b093eaef193543404fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
