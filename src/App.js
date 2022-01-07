import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Myimage from './myimage.jpg'



function App() {
  let name="abc"
  
  return (
    <div>

<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className='title red' >Your name here:{name}</h1>


<br />

<img src={Myimage} />

<br />
<img src='./myimage2.png' />     
</div>
<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    
    </div>
  );
}

export default App;
