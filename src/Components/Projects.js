import React from 'react';
import '../Assets/css/hstyle.css';
import '../Assets/css/projects.css';

import hudCard from '../Assets/css/img/hudcard.png';
import xarvisCover from '../Assets/css/img/xarviscover.png';
import xpediaCover from '../Assets/css/img/xpediacover.png';
import xsocietyCover from '../Assets/css/img/xsocietycover.png'; // Ensure proper import and semicolon
import dreamerzCover from '../Assets/css/img/dreamerzcover.png';
import zettxCover from '../Assets/css/img/zettxcover.png';

export const Projects = () => {
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
          <button>
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
 Signals and Systems            </div>
            <div className="content">XARVIS</div>
          </button>
        </div>

        <button>
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
        </button>

        <button>
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
        </button>

        <button>
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
        </button>

        <button>
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
        </button>

        <div
          className="card"
          style={{ backgroundImage: `url(${hudCard})` }}
        >
          <button>
            <div className="content">Coming soon...</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
