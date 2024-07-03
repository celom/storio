import { proxy, useSnapshot } from 'valtio';

const state = proxy({ count: 0, text: 'foo' });

export function App() {
  const snap = useSnapshot(state);

  console.count('render');

  return (
    <div>
      <div>count: {snap.count}</div>
      <div>Text: {snap.text}</div>
      <br />
      <div>
        <button onClick={() => ++state.count}>+1</button>
      </div>
      <div>
        <button onClick={() => (state.text += 'o')}>fooogerator</button>
      </div>
    </div>
  );
}

export default App;
