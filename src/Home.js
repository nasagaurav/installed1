import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Home() {
  const state = useSelector((s = s));
  const dispatch = useDispatch();
  return (
    <div>
      <h1>home </h1>
    </div>
  );
}

export default Home;
