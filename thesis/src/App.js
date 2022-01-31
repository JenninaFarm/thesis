import { Routes, Route } from 'react-router-dom';

import './Styles.scss';

import Frontpage from './components/pages/frontpage/Frontpage';
import NewPoll from './components/pages/create-poll/NewPoll';
import Voting from './components/pages/voting/Voting';

const App = () => {
  return (
    <div className='dance-vote'>
      <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/new-poll/:pollName' element={<NewPoll />} />
        <Route path='/vote/:pollId' element={<Voting />} />
      </Routes>
    </div>
  );
}

export default App;
