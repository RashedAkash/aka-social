import './share.css';
import shareImg from '../../../src/imges/270034062_104135072145342_4304221713873365102_n.jpg'

const Share = () => {
  return (
    <div>
      <div className="shareArea">
        <div className="share-img">
          <img src={shareImg} alt="" />
          <form  action="#">
            <input className='shareForm'  type="text" placeholder='What is your mind?' />
          </form>
        </div>
        <div className="share-icon">
          <ul>
            <li className='red'><i class="fa-solid fa-video"></i> live video</li>
            <li className='green'><i class="fa-regular fa-image"></i> Share img</li>
            <li className='orange'><i class="fa-regular fa-face-smile"></i> React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Share;