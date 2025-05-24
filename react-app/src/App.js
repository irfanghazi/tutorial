import logo from './logo.svg';
import './App.css';
import Index from './componets/Index';
import ThemeProvider from './componets/ThemeSwitcher/ThemeProvider';
import Theme from './componets/ThemeSwitcher/theme';
import Accordian from './componets/Accordian/Accordian';
import Comments from './componets/NestedComments/Comments';
import TicTacToe from './componets/Tic-Tac-Toe/TicTacToe';
import LearnCSS from './componets/CSS/LearnCSS';
import StarRating from './componets/StarRating/StarRating'
import Toast from './componets/Toast/Toast';
function App() {
  return (
    // <div className="App">
    //   <ThemeProvider>
    //     <Theme/>
    //     {/* <Index /> */}
    //   </ThemeProvider>
    // </div>

    <div >
      {/* <Accordian /> */}
      {/* <Comments/> */}
      {/* <TicTacToe/> */}
      {/* <LearnCSS/> */}
      {/* <StarRating/> */}
      <Toast />
    </div>
  );
}

export default App;
