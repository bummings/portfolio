import React, { Component } from "react";

import avatar from "../assets/edd_avatar.png";

let leftBracket = "<";
let rightBracket = ">";
let leftBracketEnd = "</";
let leftCurly = "{";
let rightCurly = "}";

class Splash extends Component {
  render() {
    return (
      <main className="splash">
        {/* split out separate components here, man */}
        <aside className="one">
          <div className="landing__code">
            <span className="lineNumber">01</span>
            <span className="reserved">import&nbsp;</span>
            <span className="variable">
              React, <span className="bracket">{leftCurly}</span> Component
              <span className="bracket"> {rightCurly}</span>
            </span>
            <span className="reserved">&nbsp;from </span>
            <span className="definition">&nbsp;'react'</span>
            <span className="text">;</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">02</span>
            <span className="keyword">const&nbsp;</span>
            <span className="variable">name </span>
            <span className="equal">&nbsp;= </span>
            <span className="definition">&nbsp;'Edd Burke'</span>
            <span className="text">;</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">03</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">04 </span>
            <span className="keyword">class&nbsp;</span>
            <span className="variable">Intro&nbsp;</span>
            <span className="keyword">extends&nbsp;</span>
            <span className="variable">Component&nbsp;</span>
            <span className="bracket">{leftCurly}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">05 &nbsp;</span>
            <span className="variable">render</span>
            <span className="variable">()&nbsp;</span>
            <span className="bracket">{leftCurly}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">06 &nbsp;&nbsp;</span>
            <span className="reserved"> return&nbsp;</span>
            <span className="variable">( </span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">
              07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="bracket">{leftBracket}</span>
            <span className="element">div&nbsp;</span>
            <span className="keyword">className</span>
            <span className="text">=</span>
            <span className="definition">'intro'</span>
            <span className="bracket">{rightBracket}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">
              08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="bracket">{leftBracket}</span>
            <span className="element">h1&nbsp;</span>
            <span className="keyword">className</span>
            <span className="text">=</span>
            <span className="definition">'intro__header'</span>
            <span className="bracket">{rightBracket}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">
              09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text">Hi! I'm&nbsp;</span>
            <span className="bracket">{leftCurly}</span>
            <span className="variable"> name </span>
            <span className="bracket">{rightCurly}</span>
            <span className="variable">.</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">
              10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="bracket">{leftBracketEnd}</span>
            <span className="element">h1</span>
            <span className="bracket">{rightBracket}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">
              11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="bracket">{leftBracket}/</span>
            <span className="element">div</span>
            <span className="bracket">{rightBracket}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">12 &nbsp;&nbsp;&nbsp;</span>
            <span className="variable">); </span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">13 &nbsp;</span>
            <span className="bracket">{rightCurly}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">14</span>
            <span className="bracket">{rightCurly}</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">15</span>
          </div>

          <div className="landing__code">
            <span className="lineNumber">16</span>
            <span className="reserved">export default&nbsp;</span>
            <span className="variable">Intro</span>
            <span className="bracket">;</span>
          </div>
        </aside>
        <section className="two">
          <div className="avatar">
            <img className="avatar" src={avatar} alt="user avatar" />
          </div>
          <div className="hi">
            <h1 className="hi__header">Hi! I'm Edd Burke.</h1>

            <p className="hi__paragraph">
              I'm a developer, designer and educator from Philadelphia, PA.
            </p>
            <p className="hi__paragraph">
              I care deeply about functional web technology and leveraging it to
              make our 21st century experience better for everyone.
            </p>
            <p className="hi__paragraph">
              You can analyze me on{" "}
              <a
                className="hi__link"
                href="http://github.com/bummings"
                target="_none"
              >
                Github
              </a>
              , microscope me on{" "}
              <a
                className="hi__link"
                href="http://linkedin.com/in/eddburke"
                target="_none"
              >
                LinkedIn
              </a>
              , or consume my{" "}
              <a
                className="hi__link"
                href="https://raw.githubusercontent.com/bummings/portfolio/master/eddburke.pdf"
                target="_none"
              >
                résumé
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Splash;
