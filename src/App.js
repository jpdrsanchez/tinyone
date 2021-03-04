import Logo from './components/Logo';
import GlobalStyle from './styles/styles';

const App = () => {
  return (
    <div>
      <Logo yellow={true} />
      <GlobalStyle />
    </div>
  );
};

export default App;
