import axios from 'axios';

export const START = 'START';
export const SHOW_EXERCISE = 'SHOW_EXERCISE';
export const CLOSE_EXERCISE = 'CLOSE_EXERCISE';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';

const dummyData = [
  ////    ARMS   \\\\
  { id: 1,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Stand around 30 - 40cm away from the cable, the feet are
     firmly on the floor. Take the bar and lift the weight with a fast movements.
     Lower the weight as with the dumbbell curls slowly and controlled.`,
    comments: `Don't move the elbows during the exercise`,
    gif: 'http://rs1074.pbsrc.com/albums/w415/cherokeehackslife/Workout%20Gifs/Bicep-Curl---Cables.gif~c200',
    video: ''
  },
  { id: 2,
    exercise: 'Biceps Curls With Barbell',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Hold the Barbell shoulder-wide, the back is straight, the shoulders
     slightly back, the arms are streched. Bend the arms, bringing the weight up, with a
      fast movement. Without pausing, let down the bar with a slow and controlled movement.
    Don't allow your body to swing during the exercise, all work is done by the biceps,
     which are the only mucles that should move (pay attention to the elbows).`,
    comments: `Keep your upper body straight.
    Fluid movements with no pauses at the top or the bottom`,
    gif: 'https://i.makeagif.com/media/11-07-2015/P7PT43.gif',
    video: ''
  },
  { id: 3,
    exercise: 'Hammercurls',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Hold two dumbbells and sit on a bench with a straight back,
     the shoulders are slightly rolled backwards. Your pals point to your
      body. Bend the arms and bring the weight up with a fast movement.
       Don't rotate your hands, as with the curls. Without any pause bring 
       the dumbbell down with a slow, controlled movement.
    Don't swing your body during the exercise, the biceps should 
    do all the work here. The elbows are at your side and don't move.`,
    comments: `Keep the elbows right next to the body and don't move them`,
    gif: 'https://thumbs.gfycat.com/AlarmingVeneratedFawn-small.gif',
    video: ''
  },
  { id: 4,
    exercise: 'Dips',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest , Abs',
    description: `Hold onto the bars at a narrow place (if they are not
       parallel) and press yourself up, but don't stretch the arms completely,
        so the muscles stay during the whole exercise under tension. 
        Now bend the arms and go down as much as you can, keeping the elbows 
        always pointing back, 
    At this point, you can make a short pause before repeating the movement.`,
    comments: `Don't stretch your amrs completly`,
    gif: 'https://thumbs.gfycat.com/ConstantAlertHackee-small.gif',
    video: ''
  },
  { id: 5,
    exercise: 'Dips Between Two Benches',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: '',
    description: `Put two benches so far appart, that you can hold 
    onto one with your hands and are just able to reach the other with
     your feet. The legs stay during the exercise completely stretched.
      With your elbows facing back, bend them 
    as much as you can. Push yourself up, but don't stretch out the arms.`,
    comments: `Don't stretch your arms completly.
    The elbows always point back, don't let them open sidewards`,
    gif: 'https://thumbs.gfycat.com/AnxiousIncredibleBison-small.gif',
    video: ''
  },
  { id: 6,
    exercise: 'Push Ups',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest, Abs',
    description: `Start with your body streched, your hands 
    are shoulder-wide appart on the ground. Push yourself off 
    the ground till you strech your arms. The back is always straight
     and as well as the neck (always look to the ground).
     Lower yourself to the initial position and repeat.`,
    comments: `Keep your body straight.
    Go as low as you can`,
    gif: 'https://thumbs.gfycat.com/ConventionalMajesticHusky-max-1mb.gif',
    video: ''
  },
  { id: 7,
    exercise: 'Preacher Curls',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Place the EZ curl bar on the rest handles in 
    front of the preacher bench. Lean over the bench and grab the
     EZ curl bar with palms up. Sit down on the preacher bench seat 
     so your upper arms rest on top of the pad and your chest is pressed 
     against the pad. Lower the weight until your elbows are extended and
      arms are straight. Bring the 
    weights back up to the starting point by contracting biceps. Repeat`,
    comments: ``,
    gif: 'https://fitnesspointt.files.wordpress.com/2014/08/preacher-curls-barbell.gif',
    video: ''
  },
  { id: 8,
    exercise: 'Barbell Close Grip Bench Press',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest',
    description: `Lie on bench and grasp barbell from rack with shoulder width grip
    Lower weight to chest with elbows close to body. Push barbell back up until arms 
    are straight. Repeat.`,
    comments: `Grip can be slightly narrower than shoulder width but not too close.`,
    gif: 'https://thumbs.gfycat.com/OrdinarySpryChrysalis-max-1mb.gif',
    video: ''
  },
  ////    CHEST   \\\\
  { id: 9,
    exercise: 'Bench Press',
    category: 'Chest',
    primary_muscles: 'Chest',
    secondary_muscles: 'Biceps',
    description: `Lay down on a bench, the bar should be directly above
     your eyes, the knees are somewhat angled and the feet are firmly on
      the floor. Concentrate, breath deeply and grab the bar more than 
      shoulder wide. Bring it slowly down till it briefly touches your
       chest at the height of your nipples. Push the bar up.
    If you train with a high weight it is advisable to have a spotter
     that can help you up if you can't lift the weight on your own.
    With the width of the grip you can also control which part of 
    the chest is trained more:`,
    comments: `Don't stretch your arms completly`,
    gif: 'https://i.makeagif.com/media/9-21-2015/UV5LiJ.gif',
    video: ''
  } 
];

const adress = 'http://localhost:3500/';

export const signUp = creds => dispatch => {
  return axios.post(`${adress}auth/register`, creds)
    .then(res => {

      dispatch({ type: REGISTER });
    })
    .catch(err => {
      debugger
    })
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post(`${adress}auth/login`, creds)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};


export const start = () => {
  // return axios.get(adress)
  //   .then(res => {
     
  //     dispatch({ type: START, payload: res.data });
  //   })
  //   .catch(err => {
   
  //   })

  return { type: START, payload: dummyData };
  
};


export const showExercise = (id) => {
  // return axios.get(`${adress}user/${id}`)
  //   .then(res => {
  //     debugger
  //     dispatch({ type: GET_BY_ID, payload: res.data, id: id });
  //   })
  //   .catch(err => {
  //     debugger
  //   })

  return { type: SHOW_EXERCISE, id: id};
};

export const closeExercise = () => {
  return { type: CLOSE_EXERCISE };
};