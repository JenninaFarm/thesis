import { Routes, Route } from "react-router-dom";

import './Styles.scss';

import Frontpage from './components/pages/frontpage/Frontpage';

const App = () => {
  return (
    <div className="dance-vote">
      <Routes>
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </div>
  );
}

export default App;
