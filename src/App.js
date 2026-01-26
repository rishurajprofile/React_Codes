import Video from './components/Video';

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video bgColor= "green" title = "React Js tutorial" views='10k' time ='1 year ago'channel ='codenation' ></Video>
      <Video bgColor ="red" title = "Node Js tutorial" views='100k ' time ='10 months ago'channel ='codenation' ></Video>
      <Video bgColor ="red" title = "mongoDB Js tutorial" views='100k ' time ='10 months ago'channel ='codenation' ></Video>
    </div>
  );
}

export default App;
