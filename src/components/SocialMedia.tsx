import React from "react";
import { Facebook, GitHub, Instagram, Twitter} from '@material-ui/icons'

export const SocialMedia = () => {
  return (
      <div className="social_media">
          <ul className=" ml-auto">
                <li className="">
                 <a href="https://www.facebook.com/thekamaldeepchoudhary/" target="_blank" ><Facebook/></a>
                </li>
                <li className="">
                  <a href="https://www.instagram.com/thekamaldeep/" target="_blank" ><Instagram/></a>
                </li>
                <li className="">
                  <a href="https://twitter.com/the_kamaldeep" target="_blank" ><Twitter/></a>
                </li>
                <li className="">
                  <a href="https://github.com/thekamaldeep" target="_blank" ><GitHub/></a>
                </li>
              </ul>
      </div>
  );
}