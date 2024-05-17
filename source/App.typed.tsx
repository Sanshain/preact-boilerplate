import { h } from 'preact';
import { FunctionalComponent } from 'preact';

interface IndexProps {}

const App: FunctionalComponent<IndexProps> = () => {
  return (
    <>
      <main>
        <h1>Welcome to Microsite!</h1>
        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default App;
