import React from 'react';
import '../Assets/css/hstyle.css';
import '../Assets/css/projects.css';
import { Link } from 'react-router-dom';
import { useClickSound } from '../Assets/hooks/useHoverSound';

import hudCard from '../Assets/css/img/hudcard.png';
import xarvisCover from '../Assets/css/img/xarviscover.png';
import xpediaCover from '../Assets/css/img/xpediacover.png';
import xsocietyCover from '../Assets/css/img/xsocietycover.png';
import dreamerzCover from '../Assets/css/img/dreamerzcover.png';
import zettxCover from '../Assets/css/img/zettxcover.png';

export const Projects = () => {
  const playClickSound = useClickSound();

  return (
    <div className="main-content">
      <div className="container">
        <div
          className="card"
          style={{
            backgroundImage: `url(${hudCard})`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <a href="#">
            <div>
              <img
                src={xarvisCover}
                alt="XARVIS"
                style={{
                  width: '60%',
                  borderRadius: 10,
                  marginLeft: 90,
                  marginTop: '10%',
                  height: '70%',
                }}
              />
            </div>
            <div className="content">XARVIS</div>
          </a>
        </div>

        <a href="#">
          <div
            className="card"
            style={{ backgroundImage: `url(${hudCard})` }}
          >
            <div>
              <img
                src={xpediaCover}
                alt="X Pedia"
                style={{
                  width: '60%',
                  marginLeft: 90,
                  marginTop: '10%',
                  height: '70%',
                }}
              />
            </div>
            <div className="content">X Pedia</div>
          </div>
        </a>

        <a href="#">
          <div
            className="card"
            style={{ backgroundImage: `url(${hudCard})` }}
          >
            <div>
              <img
                src={xsocietyCover}
                alt="X Society"
                style={{
                  width: '60%',
                  marginLeft: 90,
                  marginTop: '10%',
                  height: '70%',
                }}
              />
            </div>
            <div className="content">X Society</div>
          </div>
        </a>

        <a href="#">
          <div
            className="card"
            style={{ backgroundImage: `url(${hudCard})` }}
          >
            <div>
              <img
                src={dreamerzCover}
                alt="Dreamerz"
                style={{
                  width: '60%',
                  marginLeft: 90,
                  marginTop: '10%',
                  height: '70%',
                }}
              />
            </div>
            <div className="content">Dreamerz</div>
          </div>
        </a>

        <a href="#">
          <div
            className="card"
            style={{ backgroundImage: `url(${hudCard})` }}
          >
            <div>
              <img
                src={zettxCover}
                alt="Zett X"
                style={{
                  width: '60%',
                  marginLeft: 90,
                  marginTop: '10%',
                  height: '70%',
                }}
              />
            </div>
            <div className="content">Zett X</div>
          </div>
        </a>

        <div
          className="card"
          style={{ backgroundImage: `url(${hudCard})` }}
        >
          <a href="#">
            <div className="content">Coming soon...</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
