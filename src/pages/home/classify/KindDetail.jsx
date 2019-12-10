import React, { Component } from 'react';

import { KindDetailWrap } from "./classifyStyled"

class KindDetail extends Component {
  render() {
    return (
          <KindDetailWrap>
            <div>
              狗狗主粮 
              <img src="http://static.epetht.com/static_wap/appmall/lib/goods/cate_right_img.png" alt=""/>
            </div>
            <ul>
              <li>
                <img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/>
                <p>幼犬粮</p>
              </li>
              <li>
                <img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/>
                <p>幼犬粮</p>
              </li>
              <li>
                <img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/>
                <p>幼犬粮</p>
              </li>
              <li>
                <img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/>
                <p>幼犬粮</p>
              </li>
              <li>
                <img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/>
                <p>幼犬粮</p>
              </li>
            </ul>
          </KindDetailWrap>
          )
  }
}

export default KindDetail;