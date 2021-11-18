import React from 'react'
import { PostButton } from './components/PostButton'

export const PostSection = ({title}) => {
    return (
        <div>
             <section className="container">
            <div className="boxx">
                <div className="boxtext">
                <div class="boxtext">
          Post your Property for <span>Free</span><br/>
          List it on Propnex and get genuine leads
        </div>
                   {/* {title} */}
                </div>
                <div className="btnbox">
                    <PostButton/>
                </div>
            </div>
        </section>
        </div>
    )
}
